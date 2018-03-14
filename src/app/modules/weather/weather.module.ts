import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WeatherComponent } from './weather.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [WeatherComponent]
})
export class WeatherModule { }
