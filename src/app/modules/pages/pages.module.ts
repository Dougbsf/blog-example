import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { JogoComponent } from './jogo/jogo.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavoritosComponent,
    JogoComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class PagesModule { }
