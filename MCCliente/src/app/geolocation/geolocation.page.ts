import {AfterViewInit, Component, OnDestroy, ElementRef, OnInit, ViewChild,ChangeDetectionStrategy,
         ChangeDetectorRef} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Platform,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AuthenticateService } from '../service/authentication.service';
import { ApiService } from '../api/api.service';
import { ClienteI } from '../models/clientes.interface';
import { ClienteService } from '../service/cliente.service';
import { EspecialistaI } from '../models/especialista.interface';
import { EspecialistaService } from '../service/especialista.service';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { ConfigurationI } from '../models/configuration.interface';
import { ConfigurationService } from '../service/configuration.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import * as firebase from 'firebase';

declare var google;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit,AfterViewInit {
  latitude: any;
  longitude: any;
  servicios = [];
  ishidden = false;
  classHtml ="";
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
 
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
  hasNotes=false;
  indexLast;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  map = GoogleMaps.create( 'mapElement' );
  userDetail :any;

  servicio: ServicioI ={
                clienteId: '',
                especialista: null,
                createdAt: null,
                commentarios: '',
                descripcion: '',
                direccion : '',
                fechaServicio: null,
                fechaInicio: null,
                fechaFinaliza: null,
                tiempoTrabajo: null,
                equipo: '',
                frecuenciaFalla:'',
                plataforma : '',
                seccionFalla : '',
                servicio : 0,
                status : '',
                statusEquipo: '',
                tipo : '',
                position: null,
                notas: null,
                cliente: null,
                evaluacion: null
            };
  gmarkers = [];
  notas= [];
  numStatus=1;
  public progress: number = 0;

    // Interval function
    protected interval: any;
  @ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;
  constructor(
    public alertController: AlertController,
    private authService: AuthenticateService,
    private platform: Platform,
    private router: Router,
    private fcm: FCM,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private clienteService: ClienteService,
    private especialistaService: EspecialistaService,
    private servicioService: ServicioService,
    private configurationService: ConfigurationService,
    private apiService:ApiService,
    private cd: ChangeDetectorRef,
    private photoViewer: PhotoViewer
    ) { 
      this.classHtml="map100";
      this.fcm.getToken().then(token => {
        console.log(token);
        
          this.authService.getUser()
                  .then(data =>{
                    this.userDetail = data;
                    console.log(this.userDetail);
                      let clientSubs =this.clienteService.getCliente(this.userDetail.email).subscribe(cliente => {
                          cliente.fcm = token;
                          this.clienteService.updateCliente(cliente,this.userDetail.email);
                          clientSubs.unsubscribe();
                    });

                    console.log("comienza busqueda");
                    this.servicioService.getServicios(this.userDetail.uid).subscribe(servs => {
                            console.log("busca servicios");
                              console.log(servs);
                              if(servs.length>0){
                                this.classHtml="map";
                              }
                              this.servicios = servs;
                              
                            });
          });
        
      });
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
        
        this.router.navigateByUrl("/"+data.landing_page+'?servicio='+data.servicio);
        
      });
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.platform.ready().then( () => {
			this.loadMap();
		});
  }

async presentAlert() {
  await this.authService.getUser()
                  .then(data =>{
                    this.userDetail = data;
          });

    this.servicio.clienteId= this.userDetail.uid;
    this.servicio.cliente={
      "handle": this.userDetail.email,
      "uid":this.userDetail.uid
    }
    this.servicio.createdAt= new Date();
    this.servicio.fechaServicio = new Date(new Date().getTime() + 1000 * 60 * 60 * 2);
    this.servicio.status="Nuevo";
    
    let confSubs = await this.configurationService.getConfiguration().subscribe(configuration => {
              configuration.tickets =configuration.tickets +1;
              this.servicio.servicio = configuration.tickets;
              this.configurationService.updateConfiguration(configuration, 'clientes');
              this.servicioService.addServicio(this.servicio)
                                .then(data =>{
                                    this.apiService.getUrlClientPost("/servicio/add",{"servicio" : data.path})
                                        .then(data =>{
                                          
                                        });
                                });
                confSubs.unsubscribe(); 
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
    console.log(servicio);
    this.hasNotes=false;
      if(this.indexLast === servicio){
        this.classHtml="map";
        this.notas=[];
        this.indexLast=null;
      } else{
          this.indexLast=servicio;
          this.classHtml="map50";
          this.hasNotes=true;
          if(this.servicios[servicio].notas){
              this.notas=this.servicios[servicio].notas;
          } else{
            this.classHtml="map80";
            this.notas=[];
              
          }
          if(this.servicios[servicio].status==="Aceptado"){
            this.numStatus=1;
          }
          if(this.servicios[servicio].status==="En Ruta"){
            this.numStatus=2;
          }
          if(this.servicios[servicio].status==="En Progreso"){
            this.numStatus=3;
          }
          if(this.servicios[servicio].status==="Finalizado"){
            this.numStatus=4;
          }
          if(this.servicios[servicio].status==="Terminado"){
            this.numStatus=5;
          }
          console.log("es un servicio " + servicio);
      }
      this.cd.detectChanges();
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

        let espc = this.especialistaService.getEspecialistas().subscribe(especialistas => {
                                              console.log(especialistas);
                                              for(var x=0;x < especialistas.length; x++){
                                                  console.log(especialistas[x].position.latitude);
                                                  if(this.gmarkers[x]){
                                                          console.log("marker update:");
                                                          console.log(this.gmarkers[x]);
                                                          this.gmarkers[x].setPosition(new LatLng(especialistas[x].position.latitude 
                                                                                      , especialistas[x].position.longitude));
                                                        
                                                  } else{
                                                      let markerOptions: MarkerOptions = {
                                                                position: new LatLng(especialistas[x].position.latitude 
                                                                                      , especialistas[x].position.longitude),
                                                                icon: {url:"assets/icon/logopqno.png"}
                                                      };
                                                      const marker = this.map.addMarker( markerOptions )
                                                        .then( ( marker: Marker ) => {
                                                          this.gmarkers.push(marker);        
                                                        });
                                                  }

                                                }
                                            });
    }

    removeMarkers() {
          for(var x=0;x < this.gmarkers.length; x++){
            console.log("marker update:");
            console.log(this.gmarkers[x]);
            this.gmarkers[x]._map = null;
              //this.gmarkers[x].setMap(null);
              this.gmarkers[x] = null;
          }
        this.gmarkers = [];
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

    showImage(image){
        this.photoViewer.show(this.notas[image].foto);
    }

    onPress($event) {
        console.log("onPress", $event);
        this.startInterval();
    }

    onPressUp($event) {
        console.log("onPressUp", $event);
        this.stopInterval();
    }

    startInterval() {
        const self = this;
        this.interval = setInterval(function () {
            self.progress = self.progress + 1;
        }, 50);
    }

    stopInterval() {
        clearInterval(this.interval);
    }
}