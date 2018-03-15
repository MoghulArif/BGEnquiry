import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { orderService } from './services/order.service';
import {HttpModule} from '@angular/http';
// import { HeroFormComponent } from './hero-form/hero-form.component';
// import { read } from 'fs'; we need routing 


@NgModule({
  declarations: [
    AppComponent,
    //HeroFormComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [orderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

