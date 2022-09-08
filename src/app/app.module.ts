import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CarBookComponent } from './car-book/car-book.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    RegisterComponent,
    CarBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
