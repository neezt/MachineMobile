import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP } from '@ionic-native/http/ngx';
import { GoogleMaps } from '@ionic-native/google-maps'
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';	
import { AuthenticateService } from './service/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import {IonicGestureConfig} from './gestures/ionic-gesture-config';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule
      ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    NativeStorage,
    FCM,
    GoogleMaps,
    Geolocation,
    NativeGeocoder,
    CallNumber,
    AuthenticateService,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
