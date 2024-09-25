import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './product/producto-list/producto-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { EjemploComponent } from './formualarios/ejemplo/ejemplo.component';
import { DistanciaComponent } from './formualarios/distancia/distancia.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoFilterPipe,
    EjemploComponent,
    DistanciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
