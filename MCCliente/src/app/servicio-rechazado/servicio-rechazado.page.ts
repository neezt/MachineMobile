import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';
import { Platform,AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-servicio-rechazado',
  templateUrl: './servicio-rechazado.page.html',
  styleUrls: ['./servicio-rechazado.page.scss'],
})
export class ServicioRechazadoPage implements OnInit {
  rechazado = true;
  servicio ={"servicio":1,
             "id":"",
             "status":"",
             "equipo" :"",
             "descripcion":"",
             "dateServicio":"",
             "severidad" :""};
  backButtonSubscription; 
  constructor(
    public authService: AuthenticationService,
    private thisRoute:ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private callNumber: CallNumber
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        this.servicio.servicio = params.servicio;
        this.getServicio(params.servicio);
        if(params.status === "Aceptado"){
          this.rechazado = false;
        }
        
    });
  }

  ngOnInit() {
    
  }

  async getServicio(id){
    console.log(id);
     await this.authService.getUrlClientPost("/servicio",{"servicio":id})
                    .then(data =>{
                      this.servicio = data[0];
                      if(this.servicio.status !== 'Cancelado'){
                        this.rechazado=false;
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

  goToCall(number){    
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
