import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClienteI } from '../models/clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesCollection: AngularFirestoreCollection<ClienteI>;
  private clientes: Observable<ClienteI[]>;

  constructor(
    db:AngularFirestore
  ) { 
    this.clientesCollection = db.collection<ClienteI>('clientes');
    this.clientes = this.clientesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getClientes(){
    return this.clientes;
  }

  getCliente(id: string){
    return this.clientesCollection.doc<ClienteI>(id).valueChanges();
  }

  updateCliente(cliente:ClienteI, id: string){
    return this.clientesCollection.doc(id).update(cliente);
  }
  
  addCliente(cliente: ClienteI){
    return this.clientesCollection.add(cliente);
  }
  
  removeCliente(id: string){
    return this.clientesCollection.doc(id).delete();
  }

}
