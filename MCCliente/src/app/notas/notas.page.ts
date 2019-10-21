import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { Platform,AlertController } from '@ionic/angular';
import { ServicioI } from '../models/servicios.interface';
import { ServicioService } from '../service/servicio.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit,OnDestroy {
  backButtonSubscription; 
  notas=[];
  constructor(
    private thisRoute:ActivatedRoute,
    private router: Router,
    private servicioService: ServicioService,
    private photoViewer: PhotoViewer
  ) { 
    this.thisRoute.queryParams.subscribe(params => {
        this.getServicio(params.servicio);
    });
  }

  ngOnInit() {
  }

  async getServicio(id){
    console.log(id);
    
    let servActivo = this.servicioService.getServicio(id)
                        .subscribe(servs => {
                              this.notas = servs.notas;
                              servActivo.unsubscribe();
                        });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
  
  showImage(image){
      this.photoViewer.show(this.notas[image].foto);
  }
}
