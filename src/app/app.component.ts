import { Component } from '@angular/core';
import {LoginService} from './services/login.service';
import {UserPostService} from './services/user-post.service';
import * as $ from 'jquery';
import { throwError } from 'rxjs';
import { data } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctor-net';
  data : any = [];

  constructor(
    private user:LoginService,
    private userPost:UserPostService
    ){
    // this.user.getData().subscribe(data=>{
    //   console.warn(data);
    // });
    this.userPost.getData().subscribe(data=>{
      this.data = data;
      console.log(this.data.data[0].email)
      
    });
  }
}
