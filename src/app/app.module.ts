import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './modules/weather/weather.module';

import { AppComponent } from './app.component';

const modules = [
  BrowserModule,
  CoreModule,
  SharedModule,
  AppRoutingModule,
  WeatherModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
