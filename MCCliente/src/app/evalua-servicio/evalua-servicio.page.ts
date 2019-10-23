import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { AuthenticateService } from '../service/authentication.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-evalua-servicio',
  templateUrl: './evalua-servicio.page.html',
  styleUrls: ['./evalua-servicio.page.scss'],
})
export class EvaluaServicioPage implements OnInit,OnDestroy {

  servicio: ServicioI ={
                id:'',
                clienteId: '',
                especialista: null,
                createdAt: firebase.firestore.Timestamp,
                commentarios: '',
                descripcion: '',
                direccion : '',
                fechaServicio: null,
                fechaInicio: null,
                fechaFinaliza: null,
                tiempoTrabajo: null,
                equipo: '',
                frecuenciaFalla:'',
                plataforma : '',
                seccionFalla : '',
                servicio : 0,
                status : '',
                statusEquipo: '',
                tipo : '',
                position: null,
                notas: null,
                cliente: null,
                evaluacion: null
            };
  servicioId="";

  constructor(
    private thisRoute:ActivatedRoute,
    private router: Router,
    private servicioService: ServicioService
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        console.log("evaluar-servicio");
        console.log(params);
        this.getServicio(params);
    });
    console.log(this.thisRoute.snapshot.paramMap);
  }

  ngOnInit() {
  }

  getServicio(obj) {
     this.servicioId=obj.servicio;
    console.log("entro aqui " + obj.servicio);
      
      let observatorServ = this.servicioService.getServicio(obj.servicio)
                            .subscribe(servicio => {
                            this.servicio = servicio; 
                          observatorServ.unsubscribe();
                });
    }

  updateServicio(){
    this.servicioService.updateServicio(this.servicio, this.servicioId);
  }
  
  goToBack(){
      this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
  }

  ngOnDestroy() {
    this.router.navigateByUrl('/servicio?servicio='+this.servicioId);
  }

}
