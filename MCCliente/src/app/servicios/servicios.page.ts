import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { Router } from '@angular/router';
import { Platform,AlertController } from '@ionic/angular';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { AuthenticateService } from '../service/authentication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit,OnDestroy {
  servicios =[];
  backButtonSubscription; 
  filter = {};
  userDetail:any;

  constructor(
    private servicioService: ServicioService,
    private router: Router,
    private platform: Platform,
    private authService: AuthenticateService
  ) {
       this.authService.getUser()
                  .then(data =>{
                    this.userDetail = data;
                    console.log(this.userDetail);
                    this.servicioService.getServicios(this.userDetail.uid).subscribe(servs => {
                            console.log("busca servicios");
                              console.log(servs);
                              this.servicios = servs;
                            });
                  });
    
   }

  ngOnInit() {
    
  }

  goToBack(){
    this.router.navigateByUrl('/geolocation');
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  goToServicioPage(event): void{
    console.log(event);
    this.router.navigate([ 'servicio', { id: event } ]);
 
  }

}
