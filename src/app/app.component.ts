import { Component } from '@angular/core';
import {LoginService} from './services/login.service';
import {UserPostService} from './services/user-post.service';
import * as sha512 from 'js-sha512';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctor-net';
  data : any = [];
  userEmail : string = "";
  constructor(
    private user:LoginService,
    private userPost:UserPostService
    ){
    // this.user.getData().subscribe(data=>{
    //   console.warn(data);
    // });
    this.userPost.getData().subscribe(data=>{
      this.data = data;
      this.userEmail = this.data.data[0].email;
      //let userSignature = hmacSHA512(this.userEmail);
    //  console.log(userSignature);
    
      console.log(sha512.sha512(this.userEmail));
      
    });
  }
}


