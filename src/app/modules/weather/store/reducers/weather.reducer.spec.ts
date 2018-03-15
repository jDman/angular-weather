import * as fromWeather from './weather.reducer';
import * as fromActions from '../actions';
import * as mockWeather from '../../helpers/test.mocks';

import { Weather } from '../../../../interfaces/weather';

describe('Weather Reducer', () => {
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
      const action = new fromActions.LoadCity(mockWeather.city);

      const state = fromWeather.reducer(initialState, action);

      expect(state.weather).toEqual([]);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('load city success action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromWeather;
      const action = new fromActions.LoadCitySuccess(mockWeather.weather);

      const state = fromWeather.reducer(initialState, action);

      expect(state.weather).toEqual(mockWeather.mockReturn);
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
