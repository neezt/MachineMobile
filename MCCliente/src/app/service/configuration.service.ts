import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationI } from '../models/configuration.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private configurationCollection: AngularFirestoreCollection<ConfigurationI>;
  private configuration: Observable<ConfigurationI[]>;

  constructor(
    db:AngularFirestore
  ) { 

    this.configurationCollection = db.collection<ConfigurationI>('configuration');
    this.configuration = this.configurationCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getConfiguration(){
    return this.configurationCollection.doc<ConfigurationI>("clientes").valueChanges();
  }

  updateConfiguration(configuration:ConfigurationI, id: string){
    return this.configurationCollection.doc(id).update(configuration);
  }
  
}
