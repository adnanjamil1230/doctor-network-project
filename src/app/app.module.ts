import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import * as $ from "jquery";
import { AwareComponent } from './aware/aware.component';
import { ArticleComponent } from './article/article.component';
import { CounterComponent } from './counter/counter.component';
import { WorkComponent } from './work/work.component';
import { TestComponent } from './test/test.component';
import { CtaComponent } from './cta/cta.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AwareComponent,
    ArticleComponent,
    CounterComponent,
    WorkComponent,
    TestComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
