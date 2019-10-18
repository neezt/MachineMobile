import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()
export class AuthenticateService {
  
  user  ={};

  constructor(
    private nativeStorage: NativeStorage
  ){}
 
  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => {
         resolve(res)
         console.log("idToken:");
         firebase.auth().currentUser.getIdToken().then(data=>{
            console.log(data);
            this.nativeStorage.setItem('userDetails', {
                  "uid":firebase.auth().currentUser.uid,
                  "email" : firebase.auth().currentUser.email,
                  "token" : data
              })
                .then(
                  (data) => console.log('Stored first item!',data),
                  error => console.error('Error storing item', error)
                );
         });
               
         },
       err => reject(err))
   })
  }
 
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }

  async getUser(){
    await this.nativeStorage.getItem('userDetails')
          .then((data)=>{
            this.user = data;
           
          });
    return this.user;
  }
}