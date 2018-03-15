import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchEmitSpy: Spy;
  let searchFormSpy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('seachCity', () => {
    it('should call search emit on method call', () => {
      searchEmitSpy = spyOn(component.search, 'emit').and.callFake(() => {});

      component.seachCity();

      fixture.detectChanges();

      expect(searchEmitSpy).toHaveBeenCalled();
    });

    it('should reset search form on method call', () => {
      searchFormSpy = spyOn(component.searchCityForm, 'reset').and.callFake(() => {});

      component.seachCity();

      fixture.detectChanges();

      expect(searchFormSpy).toHaveBeenCalled();
    });
  });
});
