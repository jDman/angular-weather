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
import * as mockWeather from '../../helpers/test.mocks';
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

    spyOn(service, 'fetchWeatherByCity').and.returnValue(of(mockWeather.weather));
  });

  describe('load city weather', () => {
    it('should return results from load city success', () => {
      const action = new fromActions.LoadCity(mockWeather.city);
      const completion = new fromActions.LoadCitySuccess(mockWeather.weather);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadCity$).toBeObservable(expected);
    });
  });
});
