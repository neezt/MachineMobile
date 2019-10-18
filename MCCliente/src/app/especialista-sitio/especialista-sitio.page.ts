import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Platform,AlertController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Router,ActivatedRoute  } from '@angular/router';
import { EspecialistaI } from '../models/especialista.interface';
import { EspecialistaService } from '../service/especialista.service';
import { AuthenticateService } from '../service/authentication.service';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';

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

  servicio: number;

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
    private authService: AuthenticateService,
    public alertController: AlertController,
    private geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    private thisRoute:ActivatedRoute,
    private router: Router,
    private especialistaService: EspecialistaService,
    private servicioService: ServicioService
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
      
      let observatorServ = this.servicioService.getServicio(obj.servicio)
                            .subscribe(servicio => {
                          this.servicio = servicio.servicio; 
                          this.map.one( GoogleMapsEvent.MAP_READY ).then( ( data: any ) => {
                            this.geolocation.getCurrentPosition().then((resp) => {
                            this.geoAccuracy = resp.coords.accuracy; 

                            let coordinates: LatLng = new LatLng(servicio.position.latitude,
                                                                  servicio.position.longitude);

                                let position = {
                                  target: coordinates,
                                  zoom: 14
                                };

                                this.map.animateCamera( position );

                                let markerOptions: MarkerOptions = {
                                  position: coordinates,
                                  title: '#'+servicio.servicio
                                };
                                
                                const marker = this.map.addMarker( markerOptions )
                                .then( ( marker: Marker ) => {
                                  marker.showInfoWindow();
                                });
                                this.getEspecialista(obj.especialista);
                          }).catch((error) => {
                            alert('Error getting location'+ JSON.stringify(error));
                          });
                          });
                          observatorServ.unsubscribe();
                });
    }


    async getEspecialista(id){
    console.log(id);
    this.especialistaService.getEspecialista(id)
                            .subscribe(especialistas => {
                              console.log("especialista");
                              console.log(especialistas.position.latitude);
                              
                                  let markerOptions: MarkerOptions = {
                                                position: new LatLng(especialistas.position.latitude 
                                                                      , especialistas.position.longitude), 
                                                icon: { url: 'assets/icon/logopqno.png' }
                                  };
                                  const marker = this.map.addMarker( markerOptions )
                                        .then( ( marker: Marker ) => {
                                          
                                        });
                            });

    }

}
