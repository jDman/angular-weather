import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  url = 'http://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '8989b943de2f2ef7348032f267f3879e'
  };

  constructor(private http: HttpClient) { }

  fetchWeatherByCity(city) {
    this.params.q = city;
    return this.http
      .get(this.url, { params: this.params })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
