import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicioI } from '../models/servicios.interface';
import { AuthenticateService } from '../service/authentication.service';

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
