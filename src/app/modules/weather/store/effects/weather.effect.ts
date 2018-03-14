import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { switchMap, filter, map, catchError } from 'rxjs/operators';

import * as weatherActions from '../actions/weather.actions';
import { Weather } from '../../../../interfaces/weather';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private http: HttpClient) { }

  @Effect()
  loadCity$ = this.actions$
    .ofType(weatherActions.LOAD_CITY)
    .pipe(
      switchMap((action: any) => {
        return this.fetchWeatherByCity(action.payload)
          .pipe(
            map(city => new weatherActions.LoadCitySuccess(city)),
            catchError(error => of(new weatherActions.LoadCityFail(error)))
          );
      })
    );

  fetchWeatherByCity(city) {
    const params = {
      q: city,
      cnt: '8',
      units: 'metric',
      APPID: '8989b943de2f2ef7348032f267f3879e'
    };
    return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast', { params })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
