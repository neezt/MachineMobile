import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationPageModule' },
  { path: 'servicios', loadChildren: './servicios/servicios.module#ServiciosPageModule' },
  { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioPageModule' },
  { path: 'notas', loadChildren: './notas/notas.module#NotasPageModule' },
  { path: 'especialista-sitio', loadChildren: './especialista-sitio/especialista-sitio.module#EspecialistaSitioPageModule' },
  { path: 'servicio-cancelado', loadChildren: './servicio-cancelado/servicio-cancelado.module#ServicioCanceladoPageModule' },
  { path: 'servicio-rechazado', loadChildren: './servicio-rechazado/servicio-rechazado.module#ServicioRechazadoPageModule' },
  { path: 'reporte-progreso', loadChildren: './reporte-progreso/reporte-progreso.module#ReporteProgresoPageModule' },  { path: 'evalua-servicio', loadChildren: './evalua-servicio/evalua-servicio.module#EvaluaServicioPageModule' },
  { path: 'servicio-terminado', loadChildren: './servicio-terminado/servicio-terminado.module#ServicioTerminadoPageModule' },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
