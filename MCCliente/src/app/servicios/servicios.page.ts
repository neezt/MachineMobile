import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { Router } from '@angular/router';
import { Platform,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit,OnDestroy {
  servicios =[];
  backButtonSubscription; 
  filter = {};
  
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.authService.getUrlClientPost("/servicio/getAll",{})
                    .then(data =>{
                      console.log(data);
                      this.servicios = data;
                      console.log(this.servicios);
                    });
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.router.navigate(['geolocation']);
    });
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
