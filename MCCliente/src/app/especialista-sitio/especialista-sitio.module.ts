import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EspecialistaSitioPage } from './especialista-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaSitioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EspecialistaSitioPage],
  providers: [Geolocation]
})
export class EspecialistaSitioPageModule {}
