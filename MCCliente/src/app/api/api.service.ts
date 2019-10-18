import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://us-central1-machinecare-17c7a.cloudfunctions.net/api';

  public token:string;
  private headers: any = {};

  constructor(
    private nativeStorage: NativeStorage,
    private httpNative: HTTP
  ) {
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'typeuser' : 'clientes'
    };
    this.httpNative.setRequestTimeout(10.0);
  }

  async getUrlClientPost(api,data){
    let  tok = "";
      await this.getToken()
          .then(data =>{
            tok = data;
          });
    console.log("tok : " + tok);
    this.headers.authorization = "Bearer " + tok;
    return this.httpPost( this.url + api , data );
  }

  async getUrlClientGet(api,data){
    let  tok = "";
      await this.getToken()
          .then(data =>{
            tok = data;
          });
    console.log("tok : " + tok);
    this.headers.authorization = "Bearer " + tok;
    return this.httpGet( this.url + api , data );
  }

  async httpPost( url? , data? ):Promise<any>{
    let self = this;
    let valor = {};
    return new Promise( (resolve) => {
      self.httpNative.post( url , data, self.headers )
        .then(res => {
          var response = JSON.parse(res.data);
          response.status = res.status;
          if(this.url + '/login' === url){
            this.setToken(response);
          }
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          var response = JSON.parse(error.error);
          response.status = error.status;
          resolve(response);
        });
    });
  }

  async httpGet( url? , data? ):Promise<any>{
    let self = this;
    let valor = {};
    return new Promise( (resolve) => {
      self.httpNative.get( url , data, self.headers )
        .then(res => {
          var response = JSON.parse(res.data);
          response.status = res.status;
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          var response = JSON.parse(error.error);
          response.status = error.status;
          resolve(response);
        });
    });
  }

  private setToken(data){
      this.nativeStorage.setItem('token', data)
      .then(
        (data) => console.log('Stored first item!',data),
        error => console.error('Error storing item', error)
      );      
  }

  async getToken(){
    await this.nativeStorage.getItem('userDetails')
          .then((data)=>{
            console.log("userDetail:");
            console.log(data);
            this.token = data.token;
           
          });
    return this.token;
  }


}
