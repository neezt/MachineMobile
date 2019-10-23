import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { AuthenticateService } from '../service/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { Platform,AlertController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-servicio-terminado',
  templateUrl: './servicio-terminado.page.html',
  styleUrls: ['./servicio-terminado.page.scss'],
})
export class ServicioTerminadoPage implements OnInit ,OnDestroy {

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

  goToBack(){
      this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
  }

  ngOnDestroy() {
    this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
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

    async terminarServicio(valor){
          const alert = await this.alertController.create({
                header: 'Terminar Servicio',
                message: 'Esta de acuerdo con terminar el servicio',
                buttons: [{
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'danger',
                    handler: () => {
                      console.log("Cancelar");
                    }
                  },{
                    text: 'Terminar',
                    cssClass: 'success',
                    handler: () => {
                      this.api.getUrlClientPost("/servicio/close",{"servicio":this.servicioId,"tipo":valor})
                            .then(data =>{
                              console.log('Confirm Ok');
                            });
                      this.servicioService.updateServicio(this.servicio, this.servicioId);
                      this.router.navigateByUrl('/evalua-servicio?servicio='+this.servicioId);
                      
                    }
                  }]
              });

              await alert.present();
    }

}
