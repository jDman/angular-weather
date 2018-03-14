import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector } from '@ngrx/store';

import * as fromWeather from './weather.reducer';

export interface CityWeatherState {
  city: fromWeather.WeatherState;
}

export const reducers: ActionReducerMap<CityWeatherState>  = {
  city: fromWeather.reducer
};

export const getWeatherState = createFeatureSelector<CityWeatherState>(
  'weather'
);

// city state

export const getCityState = createSelector(
  getWeatherState,
  (state: CityWeatherState) => state.city
);

export const getCity = createSelector(
  getCityState,
  fromWeather.getCity
);

export const getCityLoaded = createSelector(
  getCityState,
  fromWeather.getCityLoaded
);

export const getCityLoading = createSelector(
  getCityState,
  fromWeather.getCityLoading
);
