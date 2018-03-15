import { defer } from 'rxjs/observable/defer';

import { WeatherService } from './weather.service';
import { Weather } from '../../interfaces/weather';
import * as mockWeather from './helpers/test.mocks';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchWeatherByCity', () => {
    it('should return weather data on success (httpClient called once)', () => {
      httpClientSpy.get.and.returnValue(asyncData(mockWeather.weather));

      service.fetchWeatherByCity('Shuzenji')
        .subscribe(cityWeather => {
          expect(cityWeather).toEqual(mockWeather.weather);
        });

      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });
});
