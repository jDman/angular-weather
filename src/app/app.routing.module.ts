import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './modules/weather/weather.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherComponent
  }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
