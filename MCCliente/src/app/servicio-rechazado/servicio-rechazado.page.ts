import { Component, OnInit,OnDestroy,ChangeDetectionStrategy,
         ChangeDetectorRef } from '@angular/core';
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
  servicio ={};
  backButtonSubscription; 
  constructor(
    public authService: AuthenticationService,
    private thisRoute:ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private callNumber: CallNumber,
    private cd: ChangeDetectorRef
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        this.servicio.servicio = params.servicio;
            
        if(params.status === "Aceptado"){
          this.rechazado = false;
          this.getServicio(this.servicio.servicio);
        }
        
    });
  }

  ngOnInit() {
    
  }

   async getServicio(id){
    console.log(id);
     await this.authService.getUrlClientPost("/servicio",{"servicio":id})
                    .then(data =>{
                      console.log(data);
                      this.servicio = data.servicios[0];
                      if(this.servicio.status !== 'Cancelado'){
                        this.rechazado=false;
                      }
                      this.cd.detectChanges();
                      console.log(this.servicio); 
                    });
  }

  async getSupervisores(){
     await this.authService.getUrlClientPost("/especialista/getAll",{"type":"Supervisor"})
                    .then(data =>{
                      console.log(data);
                      this.servicio = data.servicios[0];
                      if(this.servicio.status !== 'Cancelado'){
                        this.rechazado=false;
                      }
                      this.cd.detectChanges();
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
