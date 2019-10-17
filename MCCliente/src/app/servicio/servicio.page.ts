import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';
import { Platform,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit,OnDestroy {
  backButtonSubscription; 
  servicio ={"servicio":1,
             "id":"",
             "status":""};
  showCancel = true;

  constructor(
    public authService: AuthenticationService,
    private thisRoute:ActivatedRoute,
    private router: Router,
    public alertController: AlertController
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
     await this.authService.getUrlClientPost("/servicio",{"servicio":id})
                    .then(data =>{
                      this.servicio = data[0];
                      if(this.servicio.status !== 'Cancelado'){
                        this.showCancel=false;
                      }
                      console.log(this.servicio); 
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
            this.authService.getUrlClientPost("/servicio/update",serv)
                    .then(data =>{
                      console.log('Confirm Ok');
                    });
          }
        }
      ]
    });

    await alert.present();
  }
}
