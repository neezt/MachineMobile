import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { AuthenticateService } from '../service/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { EspecialistaI } from '../models/especialista.interface';
import { EspecialistaService } from '../service/especialista.service';
import { Platform,AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-servicio-cancelado',
  templateUrl: './servicio-cancelado.page.html',
  styleUrls: ['./servicio-cancelado.page.scss'],
})
export class ServicioCanceladoPage implements OnInit,OnDestroy {

  servicio: ServicioI ={
                clienteId: '',
                especialista: null,
                createdAt: firebase.firestore.Timestamp,
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
                cliente: null
            };
  especialista: EspecialistaI= {
                            id:'',
                            name:  '',
                            email: '',
                            fcm: '',
                            handle: '',
                            status: true,
                            tipo: '',
                            celular : '',
                            position: null
                          }
  backButtonSubscription; 

  constructor(
    private authService: AuthenticateService,
    public alertController: AlertController,
    private platform: Platform,
    private thisRoute:ActivatedRoute,
    private router: Router,
    private callNumber: CallNumber,
    private servicioService: ServicioService,
    private especialistaService:EspecialistaService
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        console.log("servicio-cancelado");
        console.log(params);
        this.getServicio(params);
    });
    console.log(this.thisRoute.snapshot.paramMap);
  }

  ngOnInit() {
  }

   getServicio(obj) {
    console.log("entro aqui " + obj.servicio);
      
      let observatorServ = this.servicioService.getServicio(obj.servicio)
                            .subscribe(servicio => {
                            this.servicio = servicio; 
                          let especialistaServ = this.especialistaService
                                                      .getEspecialista(servicio.especialista.handle)
                                                      .subscribe(espec => {
                                                          this.especialista=espec;
                                                          especialistaServ.unsubscribe();
                                                      });
                          observatorServ.unsubscribe();
                });
    }

  goToBack(){
      this.router.navigateByUrl('/servicios');
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

   goToCall(){    
    this.callNumber.callNumber(this.especialista.celular, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
