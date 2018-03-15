import {
  ActionReducerMap } from '@ngrx/store';

import * as fromWeather from './weather.reducer';

export interface CityWeatherState {
  city: fromWeather.WeatherState;
}

export const reducers: ActionReducerMap<CityWeatherState>  = {
  city: fromWeather.reducer
};


