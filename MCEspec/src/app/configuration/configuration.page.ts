import { Component, OnInit,OnDestroy,ChangeDetectionStrategy,
         ChangeDetectorRef } from '@angular/core';import { AuthenticationService } from '../api/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit,OnDestroy {
  trabajador ={};
  backButtonSubscription;
  ishiddenCol = true;
  ishiddenConf = true;
  ishiddenRes = false;
  constructor(
    private router: Router,
    public authService: AuthenticationService,
    private cd: ChangeDetectorRef
  ) {
   }

  ngOnInit() {
    console.log("inicia conf");
     this.authService.getUrlClientGet("/especialista",{})
                    .then(data =>{
                      console.log(data);
                      this.trabajador = data.credentials;
                      if (this.trabajador.type === "Supervisor") {
                        this.ishiddenCol = false;
                      }
                      if (this.trabajador.type === "Gerente") {
                        this.ishiddenCol = false;
                        this.ishiddenConf = false;
                        this.ishiddenRes = true;
                      }
                      this.cd.detectChanges();
                    });
  }

  goToBack(){
      this.router.navigateByUrl('/geolocation');
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}
