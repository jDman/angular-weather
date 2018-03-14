import * as fromWeather from '../actions/weather.actions';
import { Weather } from '../../interfaces/weather';

export interface WeatherState {
  data: Weather;
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromWeather.WeatherAction
): WeatherState {
  switch (action.type) {
    case fromWeather.LOAD_CITY: {
      return {
        ...state,
        loading: true
      };
    }

    case fromWeather.LOAD_CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromWeather.LOAD_CITY_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}
