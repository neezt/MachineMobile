import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicioI } from '../models/servicios.interface';
import { AuthenticateService } from '../service/authentication.service';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  userDetail:any;
  private serviciosCollection: AngularFirestoreCollection<ServicioI>;
  private servicios: Observable<ServicioI[]>;
  
  constructor(
    private authService: AuthenticateService,
    private db:AngularFirestore
  ) { 
      this.serviciosCollection = db.collection<ServicioI>('servicios');
          this.servicios = this.serviciosCollection.snapshotChanges().pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data};
              });
            })
          );
  }

  getServicios(user){
    //const query = this.serviciosCollection.ref;
    
    this.serviciosCollection = this.db.collection<ServicioI>('servicios',
                        ref => ref.where('cliente.uid', '==', user));
    
                        this.servicios = this.serviciosCollection.snapshotChanges().pipe(
                          map(actions => {
                            return actions.map(a => {
                              const data = a.payload.doc.data();
                              const id = a.payload.doc.id;
                              return {id, ...data};
                            });
                          })
                        );
    return this.servicios;
  }

  getServiciosFilter(filter){
    //const query = this.serviciosCollection.ref;
    console.log(filter);
    return new Promise((resolve, reject) => {
              let response = [];
              let mttoPrev;
              let mttoCorr;
              var db = firebase.firestore();
              var serviciosDB;
              let soporte=filter.soporte;
              let correctivo=filter.correctivo;
              let preventivo=filter.preventivo;
              serviciosDB = db.collection("servicios");
              serviciosDB = serviciosDB.where('cliente.uid', '==', filter.user);
              
              if(filter.servicio){
                console.log("buscar por servicio: " + filter.servicio);
                serviciosDB = serviciosDB.where('servicio', '==', parseInt(filter.servicio));
              }
              if(filter.status){
                serviciosDB = serviciosDB.where('status', '==', filter.status);
              }
              if(filter.desde && filter.hasta){
                serviciosDB = serviciosDB
                                  .where('fechaServicio', '>', firebase.firestore.Timestamp.fromDate(filter.desde))
                                  .where('fechaServicio', '<', firebase.firestore.Timestamp.fromDate(filter.hasta));
                console.log("desde");
                    console.log(filter.desde);
                console.log("hasta");
                    console.log(filter.hasta);
                    filter.desde = firebase.firestore.Timestamp.fromDate(filter.desde);
                    filter.hasta = firebase.firestore.Timestamp.fromDate(filter.hasta);
              } 

              if(filter.soporte){
                serviciosDB = serviciosDB.where('tipo', '==', 'Soporte Tecnico');
              }
              
              if(filter.correctivo){
                mttoCorr = serviciosDB.where('tipo', '==', 'Mantenimiento Correctivo');
                      mttoCorr.orderBy(filter.orderBy, "desc");
              }

              if(filter.preventivo){
                      mttoPrev = serviciosDB.where('tipo', '==', 'Mantenimiento Preventivo');
                      mttoPrev.orderBy(filter.orderBy, "desc");
              }
              
              if(!preventivo && !correctivo && !soporte){
                    soporte=true;
                    correctivo=true;
                    preventivo=true;
              }

              serviciosDB = serviciosDB.orderBy(filter.orderBy, "desc");
              serviciosDB.get()
                        .then((querySnapshot) => {
                          let arr = [];
                          querySnapshot.forEach(function(doc) {
                            let save = true;
                            var obj = doc.data();
                            obj.id = doc.id;
                            if(soporte){
                              console.log("soporte");
                                response.push(obj);
                            }
                          });

                        })
                        .then(()=>{
                              if(mttoPrev){
                                    mttoPrev.get()
                                            .then((querySnapshot) => {
                                              let arr = [];
                                              querySnapshot.forEach(function(doc) {
                                                let save = true;
                                                var obj = doc.data();
                                                obj.id = doc.id;
                                                console.log("mttoPrev");
                                                response.push(obj);
                                              });
                                            }).catch((error: any) => {
                                                    reject(error);
                                              });
                                  }
                          }).then(()=>{
                              if(mttoCorr){
                                        mttoCorr.get()
                                        .then((querySnapshot) => {
                                          let arr = [];
                                          querySnapshot.forEach(function(doc) {
                                            let save = true;
                                            var obj = doc.data();
                                            obj.id = doc.id;
                                            console.log("mttoCorr");
                                            response.push(obj);
                                          });
                                        }).catch((error: any) => {
                                                reject(error);
                                              });
                              }
                          }).then(()=>{
                              if (response.length > 0) {
                                resolve(response);
                              } else {
                                console.log("No such document!");
                                resolve(null);
                              }
                          })
                        .catch((error: any) => {
                          reject(error);
                        });
          });
  }

  getServicio(id: string){
    return this.serviciosCollection.doc<ServicioI>(id).valueChanges();
  }

  updateServicio(servicio:ServicioI, id: string){
    return this.serviciosCollection.doc(id).update(servicio);
  }
  
  addServicio(servicio: ServicioI){
    return this.serviciosCollection.add(servicio);
  }
  
  removeServicio(id: string){
    return this.serviciosCollection.doc(id).delete();
  }

}
