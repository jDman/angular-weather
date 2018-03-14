import * as fromWeather from '../actions/weather.actions';
import { Weather, WeatherSummary } from '../../../../interfaces/weather';
import * as moment from 'moment';

export interface WeatherState {
  cities:  WeatherSummary[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  cities: [],
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
      const cityData = {
        city: raw.city.name
      };
      raw.list.forEach(entry => {
        const key = moment(entry.dt_txt).format('h a');
        cityData[key] = entry.main.temp;
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        cities: [...state.cities, cityData]
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

export const getCityLoading = (state: WeatherState) => state.loading;
export const getCityLoaded = (state: WeatherState) => state.loaded;
export const getCity = (state: WeatherState) => state.cities;
