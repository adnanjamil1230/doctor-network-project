import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://reqres.in/api/users?page=2"
    return this.http.get(url);
  }
}
