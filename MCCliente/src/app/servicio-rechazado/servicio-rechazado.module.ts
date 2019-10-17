import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicioRechazadoPage } from './servicio-rechazado.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioRechazadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicioRechazadoPage]
})
export class ServicioRechazadoPageModule {}
