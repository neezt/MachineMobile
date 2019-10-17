import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IniciarServicioPage } from './iniciar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarServicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IniciarServicioPage]
})
export class IniciarServicioPageModule {}
