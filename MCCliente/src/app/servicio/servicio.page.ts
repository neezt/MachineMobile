import { Component, OnInit,OnDestroy,ChangeDetectionStrategy,
         ChangeDetectorRef } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { Platform,AlertController } from '@ionic/angular';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { EspecialistaService } from '../service/especialista.service';
import { AuthenticateService } from '../service/authentication.service';
import { ApiService } from '../api/api.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit,OnDestroy {
  backButtonSubscription; 
  fechaServicio=false;
  servicioId:string;
  servicio: ServicioI ={
                clienteId: '',
                especialista: null,
                createdAt: firebase.firestore.Timestamp,
                commentarios: '',
                descripcion: '',
                direccion : '',
                fechaServicio: firebase.firestore.Timestamp,
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
  showCancel = false;
  showLoad= false;

  constructor(
    private servicioService: ServicioService,
    private especialistaService: EspecialistaService,
    private thisRoute:ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private authService: AuthenticateService,
    private cd: ChangeDetectorRef,
    private api: ApiService
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        this.getServicio(params.servicio);
    });
    
  }

  ngOnInit() {
    
  }

  async getServicio(id){
    console.log(this.servicio);
    this.servicioId=id;
    let servActivo = this.servicioService.getServicio(id)
                        .subscribe(servs => {
                            console.log(servs);
                              this.servicio = servs;
                              this.fechaServicio=true;
                              this.cd.detectChanges();
                              if(this.servicio.status !=="Terminado"){
                                if(this.servicio.status !=="Finalizado"){
                                    if(this.servicio.status !=="Cerrado"){
                                      if(this.servicio.status !=="Cancelado"){
                                        console.log("estatus: "+ this.servicio.status);
                                        this.showCancel=true;  
                                        this.cd.detectChanges();
                                      }
                                    }
                                }
                              }
                              servActivo.unsubscribe();
                        });
  }

  goToBack(){
      this.router.navigateByUrl('/servicios');
  }

  showNotes(){
      this.router.navigateByUrl('/notas?servicio='+this.servicioId);
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  async cancelaServicio(){
      const alert = await this.alertController.create({
      header: 'Cancelar Servicio #' + this.servicio.servicio,
      message: 'Deseas cancelar el servicio',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.showLoad=true;
            this.showCancel=false;  
            let serv ={"servicio" : this.servicioId};
            this.servicio.status='Cancelado';
            this.servicioService.updateServicio(this.servicio,this.servicioId);
            this.api.getUrlClientPost("/servicio/cancel",serv)
                    .then(data =>{
                      this.showLoad=false;
                      this.presentAlert();
                      this.cd.detectChanges();
                      console.log('Confirm Ok');
                    });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Servicio Cancelado',
      message: 'Se cancelo tu servicio',
      buttons: ['OK']
    });

    await alert.present();
  }

}
