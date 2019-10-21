import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthenticateService } from '../service/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ClienteI } from '../models/clientes.interface';
import { ClienteService } from '../service/cliente.service';
import { Platform,AlertController } from '@ionic/angular';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit,OnDestroy {
  empresa:ClienteI ={
    name: "",
    email: "",
    emailAdicional: "",
    empresa: "",
    fcm: "",
    handle: "",
    status: false,
    telefono:"",
    celular : ""
};
  userDetail: any;
  backButtonSubscription; 
  showLoad=false;
  constructor(
    private router: Router,
    private clienteService: ClienteService,
    public authService: AuthenticateService,
    public alertController: AlertController,
    private api: ApiService
  ) {
   }

  ngOnInit() {
    console.log("inicia conf");
     this.authService.getUser()
                  .then(data =>{
                    this.userDetail=data;
                    console.log(this.userDetail);
                      let clientSubs =this.clienteService.getCliente(this.userDetail.email).subscribe(cliente => {
                          this.empresa=cliente;
                          clientSubs.unsubscribe();
                    });
          });
  }

  goToBack(){
      this.router.navigateByUrl('/geolocation');
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  async enviarCambios(){
      const alert = await this.alertController.create({
      header: 'Desea actualizar su información',
      message: 'Se enviará la petición de cambio de información, ¿está de acuerdo?',
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
            this.api.getUrlClientPost("/cliente/cambiaInformacion",this.empresa)
                    .then(data =>{
                      this.presentAlert();
                      this.showLoad=false;
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
      header: 'Los cambios se han solicitado',
      message: 'En unos momentos haremos la actualización de tu información',
      buttons: ['OK']
    });

    await alert.present();
  }

}
