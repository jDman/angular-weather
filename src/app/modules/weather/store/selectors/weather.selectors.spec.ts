import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as fromReducers from '../../store';
import * as fromActions from '../actions';
import * as fromSelectors from './weather.selectors';

import { Weather } from '../../../../interfaces/weather';

describe('Weather Selectors', () => {
  let store: Store<fromReducers.CityWeatherState>;

  const mockReturn = [ { city: 'London', '12 pm': 10.56  } ];
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

      store.dispatch(new fromActions.LoadCitySuccess(weather));

      expect(result).toEqual(mockReturn);
    });
  });
});
