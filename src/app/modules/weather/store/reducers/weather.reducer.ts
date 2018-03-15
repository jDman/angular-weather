import * as fromWeather from '../actions/weather.actions';
import { Weather, WeatherSummary } from '../../../../interfaces/weather';
import * as moment from 'moment';

export interface WeatherState {
  weather:  WeatherSummary[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  weather: [],
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
      const raw = action.payload;
      if (raw.list) {
        const cityData = {
          city: raw.city.name
        };
        raw.list.forEach((entry, i) => {
          if (i % 2 === 0) {
            const key = moment(entry.dt_txt).format('h a');
            cityData[key] = entry.main.temp;
          }
        });

        return {
          ...state,
          loading: false,
          loaded: true,
          weather: [...state.weather, cityData]
        };
      } else {
        return state;
      }
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

export const getCityLoading = (state: WeatherState) => state.loading;
export const getCityLoaded = (state: WeatherState) => state.loaded;
export const getCity = (state: WeatherState) => state.weather;
