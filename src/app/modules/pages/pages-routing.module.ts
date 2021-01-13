import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { JogoComponent } from './jogo/jogo.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'favoritos',
        component: FavoritosComponent
      },
      {
        path: 'jogo',
        component: JogoComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
