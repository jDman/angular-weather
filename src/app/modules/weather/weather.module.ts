import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [WeatherComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
