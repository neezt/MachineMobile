import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicioCanceladoPage } from './servicio-cancelado.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioCanceladoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicioCanceladoPage]
})
export class ServicioCanceladoPageModule {}
