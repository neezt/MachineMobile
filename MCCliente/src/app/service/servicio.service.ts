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
    db:AngularFirestore
  ) { 
     this.authService.getUser()
                  .then(data =>{
                        this.userDetail = data;
                        this.serviciosCollection = db.collection<ServicioI>('servicios',
                        ref => ref.where('clienteId', '==', this.userDetail.uid));
                        this.servicios = this.serviciosCollection.snapshotChanges().pipe(
                          map(actions => {
                            return actions.map(a => {
                              const data = a.payload.doc.data();
                              const id = a.payload.doc.id;
                              return {id, ...data};
                            });
                          })
                        );
                    });
    
  }

  getServicios(){
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
