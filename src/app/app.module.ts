import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { Step01Component } from './step01/step01.component';
import { Step02Component } from './step02/step02.component';
import { Step03Component } from './step03/step03.component';
import { Step04Component } from './step04/step04.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    Step01Component,
    Step02Component,
    Step03Component,
    Step04Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
