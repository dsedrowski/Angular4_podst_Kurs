import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core-module/core.module';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsRoutingModule } from './cars/cars-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CarsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
