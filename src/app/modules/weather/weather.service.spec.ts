import { WeatherService } from './weather.service';

import { defer } from 'rxjs/observable/defer';
import { Weather } from '../../interfaces/weather';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  const mockData: Weather = {
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

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchWeatherByCity', () => {
    it('should return weather data on success (httpClient called once)', () => {
      httpClientSpy.get.and.returnValue(asyncData(mockData));

      service.fetchWeatherByCity('Shuzenji')
        .subscribe(cityWeather => {
          expect(cityWeather).toEqual(mockData);
        });

      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });
});
