import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../service/authentication.service';
import { ClienteI } from '../models/clientes.interface';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mensajeError="";
  validations_form: FormGroup;
  errorMessage: string = '';
  login = {};
  loading = true;

  constructor(
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {  
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });

  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email es requerido.' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña requerida.' }
    ]
  };
  
  loginUser(value){
    this.loading=true;
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      console.log("clientes");
      console.log(res.user.email);
      
      let clienteSub = this.clienteService.getCliente(res.user.email).subscribe(cliente => {
                          clienteSub.unsubscribe(); 
                          if(cliente !== undefined){
                            console.log(cliente);
                            this.loading=false;
                            this.router.navigateByUrl('/geolocation');
                          } else{
                            this.authService.logoutUser()
                                .then(res => {
                                  console.log(res);
                                }).catch(error => {
                                  console.log(error);
                                })
                            this.errorMessage = "E-mail o contraseña incorrecta";
                          }
                           
                        });
      
    }, err => {
      console.log(err);
      this.errorMessage = "E-mail o contraseña incorrecta";
    })
  }

   /*public createLogin(){
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
   }*/
}
