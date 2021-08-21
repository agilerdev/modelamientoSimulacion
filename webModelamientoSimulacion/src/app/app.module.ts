import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tema1Component } from './temas/tema1/tema1.component';
import { Tema2Component } from './temas/tema2/tema2.component';
import { Tema3Component } from './temas/tema3/tema3.component';
import { Tema4Component } from './temas/tema4/tema4.component';
import { HomeComponent } from './varios/home/home.component';
import { AboutComponent } from './varios/about/about.component';
import { Tema5Component } from './temas/tema5/tema5.component';
import { Tema6Component } from './temas/tema6/tema6.component';
import { Tema7Component } from './temas/tema7/tema7.component';

@NgModule({
  declarations: [
    AppComponent,
    Tema1Component,
    Tema2Component,
    Tema3Component,
    Tema4Component,
    HomeComponent,
    AboutComponent,
    Tema5Component,
    Tema6Component,
    Tema7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatProgressBarModule,
    MatTreeModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
