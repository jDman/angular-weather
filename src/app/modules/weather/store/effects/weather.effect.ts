import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { WeatherService } from '../../weather.service';
import * as weatherActions from '../actions/weather.actions';
import { Weather } from '../../../../interfaces/weather';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  @Effect()
  loadCity$ = this.actions$.pipe(
    ofType(weatherActions.LOAD_CITY),
    switchMap((action: any) => {
      return this.weatherService
        .fetchWeatherByCity(action.payload)
        .pipe(
          map(city => new weatherActions.LoadCitySuccess(city)),
          catchError(error => of(new weatherActions.LoadCityFail(error)))
        );
    })
  );
}
