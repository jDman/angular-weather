import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { WeatherComponent } from './weather.component';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('weather', reducers)
  ],
  declarations: [WeatherComponent]
})
export class WeatherModule { }
