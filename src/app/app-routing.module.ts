import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tema1Component } from './temas/tema1/tema1.component';
import { Tema2Component } from './temas/tema2/tema2.component';
import { Tema3Component } from './temas/tema3/tema3.component';
import { Tema4Component } from './temas/tema4/tema4.component';
import { Tema5Component } from './temas/tema5/tema5.component';
import { Tema6Component } from './temas/tema6/tema6.component';
import { Tema7Component } from './temas/tema7/tema7.component';
import { HomeComponent } from './varios/home/home.component';
import { ManualComponent } from './varios/manual/manual.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tema1', component: Tema1Component },
  { path: 'tema2', component: Tema2Component },
  { path: 'tema3', component: Tema3Component },
  { path: 'tema4', component: Tema4Component },
  { path: 'tema5', component: Tema5Component },
  { path: 'tema6', component: Tema6Component },
  { path: 'tema7', component: Tema7Component },
  { path: 'manual', component: ManualComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
