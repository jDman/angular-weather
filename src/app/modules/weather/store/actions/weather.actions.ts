import { Action } from '@ngrx/store';

import { Weather } from '../../../../interfaces/weather';

// load city
export const LOAD_CITY = '[Weather] Load City';
export const LOAD_CITY_FAIL = '[Weather] Load City Fail';
export const LOAD_CITY_SUCCESS = '[Weather] Load City Success';

export class LoadCity implements Action {
  readonly type = LOAD_CITY;
}

export class LoadCityFail implements Action {
  readonly type = LOAD_CITY_FAIL;
  constructor(public payload: any) {}
}

export class LoadCitySuccess implements Action {
  readonly type = LOAD_CITY_SUCCESS;
  constructor(public payload: Weather) {}
}

// action types
export type WeatherAction = LoadCity | LoadCityFail | LoadCitySuccess;
