import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as fromReducers from './store';
import * as fromActions from './store/actions';
import * as fromSelectors from './store/selectors/weather.selectors';

import { WeatherComponent } from './weather.component';

import { WeatherSummary } from '../../interfaces/weather';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let store: Store<fromReducers.CityWeatherState>;

  const cityWeather: WeatherSummary[] = [
    {city: 'London'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [
        StoreModule.forRoot(
          {
            ...fromRoot.reducers,
            weather: combineReducers(fromReducers.reducers)
          }
        )
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
