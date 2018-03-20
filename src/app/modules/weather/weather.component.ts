import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/observable';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import * as fromStore from './store';
import { WeatherSummary } from '../../interfaces/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities$: Observable<WeatherSummary[]>;
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  noResults$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.CityWeatherState>
  ) {}

  ngOnInit() {
    this.cities$ = this.store
      .select(fromStore.getCity);
    this.loaded$ = this.store
      .select(fromStore.getCityLoaded);
    this.loading$ = this.store
      .select(fromStore.getCityLoading);

    this.noResults$ = this.loaded$.pipe(
      withLatestFrom(
        this.loading$
      ),
      map(([loaded, loading]) => {
        return (!loaded && !loading);
      }),
      startWith(false)
    );
  }

  citySearch(city: string) {
    this.store.dispatch(new fromStore.LoadCity(city.toLowerCase()));
  }
}
