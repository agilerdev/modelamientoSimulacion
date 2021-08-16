import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tema1Component } from './temas/tema1/tema1.component';
import { Tema2Component } from './temas/tema2/tema2.component';
import { Tema3Component } from './temas/tema3/tema3.component';
import { Tema4Component } from './temas/tema4/tema4.component';
import { HomeComponent } from './varios/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tema1', component: Tema1Component },
  { path: 'tema2', component: Tema2Component },
  { path: 'tema3', component: Tema3Component },
  { path: 'tema4', component: Tema4Component },
  // {path: 'tema5', component: Tema5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
