import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit,OnDestroy {
  empresa ={};
  backButtonSubscription; 
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {
   }

  ngOnInit() {
    console.log("inicia conf");
     this.authService.getUrlClientGet("/cliente",{})
                    .then(data =>{
                      console.log(data);
                      this.empresa=  data.credentials;
                    });
  }

  goToBack(){
      this.router.navigateByUrl('/geolocation');
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}
