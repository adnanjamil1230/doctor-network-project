import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://api.coinmakes.com:8443/session"
    
    return this.http.get(url ,{ headers: new HttpHeaders({'Authorization': 'api-token de603a89907d076c8fbe8cd108d63191f073fbe4771c2799e07fae15f9027277'})
  });
  }
}
