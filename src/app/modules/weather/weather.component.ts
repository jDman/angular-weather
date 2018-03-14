import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/observable';

import * as fromStore from './store';
import { Weather } from '../../interfaces/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities$: Observable<Weather[]>;

  constructor(private store: Store<fromStore.CityWeatherState>) {}

  ngOnInit() {
    this.cities$ = this.store.select(fromStore.getCity);
  }

  citySearch(event) {

  }
}
