import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'actualiza-reporte', loadChildren: './actualiza-reporte/actualiza-reporte.module#ActualizaReportePageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationPageModule' },
  { path: 'colaborador', loadChildren: './colaborador/colaborador.module#ColaboradorPageModule' },
  { path: 'colaboradores', loadChildren: './colaboradores/colaboradores.module#ColaboradoresPageModule' },
  { path: 'especialista-ruta', loadChildren: './especialista-ruta/especialista-ruta.module#EspecialistaRutaPageModule' },
  { path: 'evaluacion', loadChildren: './evaluacion/evaluacion.module#EvaluacionPageModule' },
  { path: 'iniciar-sesion', loadChildren: './iniciar-sesion/iniciar-sesion.module#IniciarSesionPageModule' },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerPageModule' },
  { path: 'iniciar-servicio', loadChildren: './iniciar-servicio/iniciar-servicio.module#IniciarServicioPageModule' },
  { path: 'notas', loadChildren: './notas/notas.module#NotasPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'nueva-solicitud', loadChildren: './nueva-solicitud/nueva-solicitud.module#NuevaSolicitudPageModule' },
  { path: 'reporte-progreso', loadChildren: './reporte-progreso/reporte-progreso.module#ReporteProgresoPageModule' },
  { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioPageModule' },
  { path: 'solicitud-aceptada', loadChildren: './solicitud-aceptada/solicitud-aceptada.module#SolicitudAceptadaPageModule' },
  { path: 'servicios', loadChildren: './servicios/servicios.module#ServiciosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
