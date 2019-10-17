import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mensajeError="";
  login = {};
  loading = true;
  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {  
    
  }

   public createLogin(){
     this.loading = false;
     this.authService.getLogin(this.login)
     .then(data =>{
        if(data.status != 200){
          this.loading = true;
          this.mensajeError = data.general;
        } else{
            this.loading = true;
            console.log("Token " + this.authService.getToken());
            this.login = {};
            this.router.navigate(['geolocation']);
        }
        
     });
      
   }
}
