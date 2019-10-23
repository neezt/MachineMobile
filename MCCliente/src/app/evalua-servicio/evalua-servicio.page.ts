import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { AuthenticateService } from '../service/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { Platform,AlertController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-evalua-servicio',
  templateUrl: './evalua-servicio.page.html',
  styleUrls: ['./evalua-servicio.page.scss'],
})
export class EvaluaServicioPage implements OnInit,OnDestroy {

  servicio: ServicioI ={
                id:'',
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
                cliente: null,
                evaluacion: {
                  puntualidad:0,
                  dominio:0,
                  proceso:0,
                  orden:0,
                  empatia:0,
                  rapidez:0,
                  comunicacion:0
                }
            };
  servicioId="";
  showBoton = true;
  constructor(
    public alertController: AlertController,
    private thisRoute:ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private servicioService: ServicioService
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        console.log("evaluar-servicio");
        console.log(params);
        this.getServicio(params);
    });
    console.log(this.thisRoute.snapshot.paramMap);
  }

  ngOnInit() {
  }

  getServicio(obj) {
     this.servicioId=obj.servicio;
    console.log("entro aqui " + obj.servicio);
      
      let observatorServ = this.servicioService.getServicio(obj.servicio)
                            .subscribe(servicio => {
                            this.servicio = servicio; 
                            console.log(this.servicio);
                          observatorServ.unsubscribe();
                });
    }

  async updateServicio(){
    this.showBoton=false;
    this.servicioService.updateServicio(this.servicio, this.servicioId);
    this.api.getUrlClientPost("/servicio/evaluationFinish",{"servicio":this.servicioId})
                    .then(data =>{
                      console.log('Confirm Ok');
                    });
    const alert = await this.alertController.create({
      header: 'Evaluacion enviada',
      message: 'Muchas gracias por su tiempo',
      buttons: [{
          text: 'Terminar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
            
          }
        }]
    });

    await alert.present();
  }
  
  goToBack(){
      this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
  }

  ngOnDestroy() {
    this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
  }

}
