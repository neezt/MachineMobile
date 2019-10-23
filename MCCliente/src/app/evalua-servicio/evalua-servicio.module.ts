import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from 'ionic4-rating';//this is import package.
import { IonicModule } from '@ionic/angular';

import { EvaluaServicioPage } from './evalua-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluaServicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EvaluaServicioPage]
})
export class EvaluaServicioPageModule {}
