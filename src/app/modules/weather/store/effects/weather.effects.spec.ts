import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';

import { Observable } from 'rxjs/observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { WeatherService } from '../../weather.service';

import * as fromEffects from './weather.effect';
import * as fromActions from '../actions';
import { Weather } from '../../../../interfaces/weather';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('Weather Effects', () => {
  let actions$;
  let service;
  let effects;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherService,
        fromEffects.WeatherEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(WeatherService);
    effects = TestBed.get(fromEffects.WeatherEffects);

    spyOn(service, 'fetchWeatherByCity').and.returnValue(of(weather));
  });

  describe('load city weather', () => {
    it('should return results from load city success', () => {
      const action = new fromActions.LoadCity(city);
      const completion = new fromActions.LoadCitySuccess(weather);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadCity$).toBeObservable(expected);
    });
  });
});
