import * as fromWeather from './weather.actions';
import { Weather } from '../../../../interfaces/weather';

describe('Weather Actions', () => {
  const city = 'london';
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

  describe('load city weather actions', () => {
    describe('load city', () => {
      it('should create an action', () => {
        const action = new fromWeather.LoadCity(city);

        expect({ ...action }).toEqual({
          type: fromWeather.LOAD_CITY,
          payload: city
        });
      });
    });

    describe('load city success', () => {
      it('should create an action', () => {
        const action = new fromWeather.LoadCitySuccess(weather);

        expect({ ...action }).toEqual({
          type: fromWeather.LOAD_CITY_SUCCESS,
          payload: weather
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
