import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitudAceptadaPage } from './solicitud-aceptada.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudAceptadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SolicitudAceptadaPage]
})
export class SolicitudAceptadaPageModule {}
