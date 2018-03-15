import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/observable';

import * as fromStore from './store';
import { WeatherSummary } from '../../interfaces/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities$: Observable<WeatherSummary[]>;

  constructor(private store: Store<fromStore.CityWeatherState>) {}

  ngOnInit() {
    this.cities$ = this.store.select(fromStore.getCity);
    this.store.dispatch(new fromStore.LoadCity(''));
  }

  citySearch(city: string) {
    this.store.dispatch(new fromStore.LoadCity(city.toLowerCase()));
  }
}
