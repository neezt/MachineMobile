import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EspecialistaRutaPage } from './especialista-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaRutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EspecialistaRutaPage]
})
export class EspecialistaRutaPageModule {}
