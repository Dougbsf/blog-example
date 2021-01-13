import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { PagesModule } from './modules/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthenticationModule,
    PagesModule
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
