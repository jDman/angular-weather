import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as fromReducers from '../../store';
import * as fromActions from '../actions';
import * as fromSelectors from './weather.selectors';
import * as mockWeather from '../../helpers/test.mocks';

import { Weather } from '../../../../interfaces/weather';

describe('Weather Selectors', () => {
  let store: Store<fromReducers.CityWeatherState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          weather: combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('', () => {
    it('should first return an empty array', () => {
      let result;

      store.select(fromSelectors.getCity)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual([]);
    });

    it('should return an array of weather summary', () => {
      let result;

      store.select(fromSelectors.getCity)
        .subscribe(value => {
          result = value;
        });

      store.dispatch(new fromActions.LoadCitySuccess(mockWeather.weather));

      expect(result).toEqual(mockWeather.mockReturn);
    });
  });
});
