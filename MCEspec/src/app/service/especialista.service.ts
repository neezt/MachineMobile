import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EspecialistaI } from '../models/especialista.interface';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  private especialistasCollection: AngularFirestoreCollection<EspecialistaI>;
  private especialistas: Observable<EspecialistaI[]>;

  constructor(
    db:AngularFirestore
  ) { 
    this.especialistasCollection = db.collection<EspecialistaI>('especialistas');
    this.especialistas = this.especialistasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getEspecialistas(){
    return this.especialistas;
  }

  getEspecialista(id: string){
    return this.especialistasCollection.doc<EspecialistaI>(id).valueChanges();
  }

  updateEspecialista(especialista:EspecialistaI, id: string){
    return this.especialistasCollection.doc(id).update(especialista);
  }
  
  addEspecialista(especialista: EspecialistaI){
    return this.especialistasCollection.add(especialista);
  }
  
  removeEspecialista(id: string){
    return this.especialistasCollection.doc(id).delete();
  }
  
}
