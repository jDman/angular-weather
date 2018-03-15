import * as fromWeather from './weather.actions';
import * as mockWeather from '../../helpers/test.mocks';
import { Weather } from '../../../../interfaces/weather';

describe('Weather Actions', () => {
  describe('load city weather actions', () => {
    describe('load city', () => {
      it('should create an action', () => {
        const action = new fromWeather.LoadCity(mockWeather.city);

        expect({ ...action }).toEqual({
          type: fromWeather.LOAD_CITY,
          payload: mockWeather.city
        });
      });
    });

    describe('load city success', () => {
      it('should create an action', () => {
        const action = new fromWeather.LoadCitySuccess(mockWeather.weather);

        expect({ ...action }).toEqual({
          type: fromWeather.LOAD_CITY_SUCCESS,
          payload: mockWeather.weather
        });
      });
    });

    describe('load city fail', () => {
      it('should ', () => {
        const payload = { message: 'Load Error' };
        const action = new fromWeather.LoadCityFail(payload);

        expect({ ...action }).toEqual({
          type: fromWeather.LOAD_CITY_FAIL,
          payload
        });
      });
    });

  });
});
