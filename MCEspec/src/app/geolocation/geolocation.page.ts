import {AfterViewInit, Component, OnDestroy, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Platform,AlertController } from '@ionic/angular';
import { AuthenticationService } from '../api/authentication.service';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit,AfterViewInit {
  latitude: any;
  longitude: any;
  servicios = ['12121','12234','00121','010121','121212','12121','12234','20121','514131','124232'];
  ishidden = false;
  backButtonSubscription; 

  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
 
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
 
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  map = GoogleMaps.create( 'mapElement' );

  @ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;
  constructor(
    public alertController: AlertController,
    public authService: AuthenticationService,
    private platform: Platform,
    private router: Router,
    private fcm: FCM,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
    ) { 
      this.fcm.getToken().then(token => {
        console.log(token);
        this.authService.getUrlClientPost("/cliente/update",{"fcm":token})
                    .then(data =>{
                      console.log(data);
                    });
      });
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
        if(data.landing_page === 'especialista-sitio'){
          this.router.navigateByUrl("/"+data.landing_page+'?servicio='+data.servicio+'&lat='+data.lat+'&lng='+data.lng+'&especialista='+data.especialista);
        }
        if(data.landing_page === 'servicio-rechazado'){
          this.router.navigateByUrl("/"+data.landing_page+'?servicio='+data.servicio + '&status='+data.status);
        }
        //this.router.navigate( [data.landing_page, { "servicio": data.servicio } ]);
      });
    }

  ngOnInit() {
    this.authService.getUrlClientGet("/cliente",{})
                    .then(data =>{
                      console.log(data);
                    });
                    
    
  }

  ngAfterViewInit(): void {
    this.platform.ready().then( () => {

			this.loadMap();
		});
  }

async presentAlert() {
    let serv ={};
    serv["tipo"] = "";
    serv["seccionFalla"] = "";
    serv["frecuenciaFalla"] = "";
    serv["equipo"] = "";
    serv["descripcion"]="";
    serv["status"]="Nuevo";
    serv["statusEquipo"] ="";
    serv["plataforma"] = "";
     this.authService.getUrlClientPost("/servicio/add",{"servicio" : serv})
                    .then(data =>{
                      
                    });
    const alert = await this.alertController.create({
      header: 'Solicitud enviada',
      message: 'Su solicitud ha sido creada, gracias',
      buttons: ['Enterado']
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Para continuar necesitas registrarte',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre Completo'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Correo'
        },
        {
          name: 'name2',
          type: 'number',
          placeholder: 'Celular'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Registrar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async clickServicio(servicio) {
    
      console.log("es un servicio " + servicio);
  }

  loadMap() {
      this.map.one( GoogleMapsEvent.MAP_READY ).then( ( data: any ) => {
        this.geolocation.getCurrentPosition().then((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.geoAccuracy = resp.coords.accuracy; 
        let coordinates: LatLng = new LatLng(this.geoLatitude,this.geoLongitude);

            let position = {
              target: coordinates,
              zoom: 14
            };

            this.map.animateCamera( position );

            let markerOptions: MarkerOptions = {
              position: coordinates,
              title: 'Tu ubicacion'
            };
            this.getEspecialistasActive();
            const marker = this.map.addMarker( markerOptions )
            .then( ( marker: Marker ) => {
              marker.showInfoWindow();
            });
       }).catch((error) => {
         alert('Error getting location'+ JSON.stringify(error));
       });
      })
    }

    getEspecialistasActive(){
      
        this.authService.getUrlClientPost("/especialista/getAll",{})
                    .then(data =>{
                      for(var x=0;x < data.especialistas.length; x++){
                        console.log(data.especialistas[x].position._latitude);
                        let markerOptions: MarkerOptions = {
                                      position: new LatLng(data.especialistas[x].position._latitude 
                                                            , data.especialistas[x].position._longitude),
                                      icon: "assets/icon/logopqno.png"
                        };
                        const marker = this.map.addMarker( markerOptions )
                              .then( ( marker: Marker ) => {
                                
                              });
                      }
                    });
      
    }
    //Return Comma saperated address
    generateAddress(addressObj){
        let obj = [];
        let address = "";
        for (let key in addressObj) {
          obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
          if(obj[val].length)
          address += obj[val]+', ';
        }
      return address.slice(0, -2);
    }
  
  
    //Start location update watch
    watchLocation(){
      this.isWatching = true;
      this.watchLocationUpdates = this.geolocation.watchPosition();
      this.watchLocationUpdates.subscribe((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        //this.getGeoencoder(this.geoLatitude,this.geoLongitude);
      });
    }
  
    //Stop location update watch
    stopLocationWatch(){
      this.isWatching = false;
      this.watchLocationUpdates.unsubscribe();
    }

}