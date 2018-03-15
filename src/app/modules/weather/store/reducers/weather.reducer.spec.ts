import * as fromWeather from './weather.reducer';
import * as fromActions from '../actions';

import { Weather } from '../../../../interfaces/weather';

describe('Weather Reducer', () => {
  const city = 'london';
  const mockReturn = [ { city: 'London', '12 pm': 10.56  } ];
  const weather: Weather = {
    cod: '200',
    message: 0.0125,
    cnt: 8,
    list:
    [{ dt: 1521115200,
    main: {
      temp: 10.56,
      temp_min: 10.56,
      temp_max: 10.58,
      pressure: 995.76,
      sea_level: 1003.27,
      grnd_level: 995.76,
      humidity: 97,
      temp_kf: -0.03
      },
    weather: [{
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    clouds: { 'all': 76 },
    wind: { 'speed': 3.16, 'deg': 186.003 },
    sys: { 'pod': 'd' },
    dt_txt: '2018-03-15 12:00:00' }],
    city: {
      id: 2643743,
      name: 'London',
      coord: { lat: 51.5073, lon: -0.1277 },
      country: 'GB',
      population: 1000000 }
    };
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromWeather;
      const action = {} as any;

      const state = fromWeather.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('load city action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromWeather;
      const action = new fromActions.LoadCity(city);

      const state = fromWeather.reducer(initialState, action);

      expect(state.weather).toEqual([]);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('load city success action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromWeather;
      const action = new fromActions.LoadCitySuccess(weather);

      const state = fromWeather.reducer(initialState, action);

      expect(state.weather).toEqual(mockReturn);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe('load city fail action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromWeather;
      const payload = { message: 'Load Error' };
      const action = new fromActions.LoadCityFail(payload);

      const state = fromWeather.reducer(initialState, action);

      expect(state.weather).toEqual([]);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });
});
