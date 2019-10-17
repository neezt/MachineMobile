import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Platform,AlertController } from '@ionic/angular';
import { AuthenticationService } from '../api/authentication.service';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Router,ActivatedRoute  } from '@angular/router';

declare var google;

@Component({
  selector: 'app-especialista-sitio',
  templateUrl: './especialista-sitio.page.html',
  styleUrls: ['./especialista-sitio.page.scss'],
})
export class EspecialistaSitioPage implements OnInit, AfterViewInit {
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;

  servicio: string;

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
    public authService: AuthenticationService,
    public alertController: AlertController,
    private geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    private thisRoute:ActivatedRoute,
    private router: Router
    ) { 
      this.thisRoute.queryParams.subscribe(params => {
        console.log("especialista-sitio");
        console.log(params);
        this.getServicio(params);
    });
    console.log(this.thisRoute.snapshot.paramMap);
    }

  ngOnInit() {
  }

   ngAfterViewInit(): void {
    /*this.platform.ready().then( () => {

			this.loadMap();
		});*/
  }

  goToBack(){
      this.router.navigateByUrl('/geolocation');
  }

async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Solicitud #12111 enviada',
      message: 'Su solicitud ha sido creada',
      buttons: ['Enterado']
    });

    await alert.present();
  }

  getServicio(obj) {
    console.log("entro aqui " + obj.servicio);
      this.servicio = obj.servicio;
      this.map.one( GoogleMapsEvent.MAP_READY ).then( ( data: any ) => {
        this.geolocation.getCurrentPosition().then((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.geoAccuracy = resp.coords.accuracy; 

        let coordinates: LatLng = new LatLng(obj.lat,obj.lng);

            let position = {
              target: coordinates,
              zoom: 14
            };

            this.map.animateCamera( position );

            let markerOptions: MarkerOptions = {
              position: coordinates,
              title: '#'+obj.servicio
            };
            
            const marker = this.map.addMarker( markerOptions )
            .then( ( marker: Marker ) => {
              marker.showInfoWindow();
            });
            this.getEspecialista(obj.especialista);
       }).catch((error) => {
         alert('Error getting location'+ JSON.stringify(error));
       });
      })
    }


    async getEspecialista(id){
    console.log(id);
     await this.authService.getUrlClientPost("/especialista/byId",{"especialista":id})
                    .then(data =>{
                      console.log("entro al funcion");
                      console.log(data);
                      let markerOptions: MarkerOptions = {
                        position: new LatLng(data.especialistas[0].position._latitude,data.especialistas[0].position._longitude),
                        title: data.especialistas[0].name,
                        icon: "assets/icon/logopqno.png"
                      };
                      
                      const marker = this.map.addMarker( markerOptions )
                      .then( ( marker: Marker ) => {
                        marker.showInfoWindow();
                      });
                    });
    }

}
