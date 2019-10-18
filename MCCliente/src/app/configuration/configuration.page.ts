import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthenticateService } from '../service/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ClienteI } from '../models/clientes.interface';
import { ClienteService } from '../service/cliente.service';

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
  constructor(
    private router: Router,
    private clienteService: ClienteService,
    public authService: AuthenticateService
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
}
