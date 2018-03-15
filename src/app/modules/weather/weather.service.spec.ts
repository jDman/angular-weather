import { WeatherService } from './weather.service';

import { defer } from 'rxjs/observable/defer';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  const mockData = {
    'city': {
      'id': 1851632, 'name': 'Shuzenji',
      'coord': { 'lon': 138.933334, 'lat': 34.966671 },
      'country': 'JP',
      'cod': '200',
      'message': 0.0045,
      'cnt': 38,
      'list': [{
        'dt': 1406106000,
        'main': {
          'temp': 298.77,
          'temp_min': 298.77,
          'temp_max': 298.774,
          'pressure': 1005.93,
          'sea_level': 1018.18,
          'grnd_level': 1005.93,
          'humidity': 87,
          'temp_kf': 0.26
        },
        'weather': [{ 'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d' }],
        'clouds': { 'all': 88 },
        'wind': { 'speed': 5.71, 'deg': 229.501 },
        'sys': { 'pod': 'd' },
        'dt_txt': '2014-07-23 09:00:00'
      }
      ]
    }
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
