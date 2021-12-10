import { Component } from '@angular/core';
import {LoginService} from './services/login.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctor-net';
  constructor(private user:LoginService){
    this.user.getData().subscribe(data=>{
      console.warn(data);
    })
  }
}
