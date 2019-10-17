import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevaSolicitudPage } from './nueva-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaSolicitudPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevaSolicitudPage]
})
export class NuevaSolicitudPageModule {}
