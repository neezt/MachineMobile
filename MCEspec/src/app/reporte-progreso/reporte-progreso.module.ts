import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReporteProgresoPage } from './reporte-progreso.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteProgresoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReporteProgresoPage]
})
export class ReporteProgresoPageModule {}
