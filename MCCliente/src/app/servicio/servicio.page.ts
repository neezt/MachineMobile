import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { Platform,AlertController } from '@ionic/angular';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { EspecialistaService } from '../service/especialista.service';
import { AuthenticateService } from '../service/authentication.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit,OnDestroy {
  backButtonSubscription; 
  servicio: ServicioI ={
                clienteId: '',
                especialista: null,
                createdAt: null,
                descripcion: '',
                fechaServicio: null,
                equipo: "",
                frecuenciaFalla:"",
                plataforma : "",
                seccionFalla : "",
                servicio : 0,
                status : "",
                tipo : "",
                direccion : "",
                position: null
            }
  showCancel = true;

  constructor(
    private servicioService: ServicioService,
    private especialistaService: EspecialistaService,
    private thisRoute:ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private authService: AuthenticateService
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        this.getServicio(params.servicio);
    });
    console.log(this.thisRoute.snapshot.paramMap);
  }

  ngOnInit() {
    
  }

  async getServicio(id){
    console.log(id);
    let servActivo = this.servicioService.getServicio(id)
                        .subscribe(servs => {
                              this.servicio = servs;
                              console.log(this.servicio);
                              servActivo.unsubscribe();
                        });
  }

  goToBack(){
      this.router.navigateByUrl('/servicios');
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
            console.log(this.servicio.id);
            let serv ={"servicio" : this.servicio.id, "status" : "Cancelado"};
            /*this.authService.getUrlClientPost("/servicio/update",serv)
                    .then(data =>{
                      console.log('Confirm Ok');
                    });*/
          }
        }
      ]
    });

    await alert.present();
  }
}
