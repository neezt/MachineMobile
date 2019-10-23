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
  servicios:any =[];
  backButtonSubscription; 
  filter:any={};
  userDetail:any;

  constructor(
    private servicioService: ServicioService,
    private router: Router,
    public alertController: AlertController,
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
          this.filter.soporte=true;
          this.filter.preventivo= true;
          this.filter.correctivo= true;
          this.filter.orderBy="fechaServicio";
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

  async searchFilter(){
    this.servicios =[];
    this.filter["user"] =this.userDetail.uid;
    let buscar = true;
    if(this.filter.hasta){
      if(!this.filter.desde){
          buscar = false;
      }
    }
    if(buscar){
        this.servicioService.getServiciosFilter(this.filter)
                        .then((data)=>{
                            console.log(data);
                            this.servicios = data;
                            console.log(this.servicios);
                        });
    } else {
        const alert = await this.alertController.create({
              header: 'Filtro incompleto',
              message: 'Debes colocar una fecha inicial',
              buttons: ['Enterado']
            });

            await alert.present();
    }
    
  }

  changeDate(event){
    let dateDesde= new Date(event);
    
    let date=new Date(dateDesde.getFullYear()+'-'+(dateDesde.getMonth()+1)+'-'+ (dateDesde.getDate()-1) + " 19:00:00");
    this.filter.desde=date;
    if(!this.filter.hasta){
        let date2=new Date(dateDesde.getFullYear()+'-'+(dateDesde.getMonth()+1)+'-'+ dateDesde.getDate()+ " 18:59:59");
        this.filter.hasta=date2;
    }
    
    console.log(this.filter);
  }

  changeDateHasta(event){
    let dateHasta= new Date(event);
    
    let date2=new Date(dateHasta.getFullYear()+'-'+(dateHasta.getMonth()+1)+'-'+ dateHasta.getDate()+ " 18:59:59");
    this.filter.hasta=date2;
    console.log(this.filter);
  }


}
