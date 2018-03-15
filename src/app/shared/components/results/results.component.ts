import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { WeatherSummary } from '../../../interfaces/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnChanges {
  @Input() cities: WeatherSummary[] = [];
  displayedColumns = ['city'];
  constructor() { }

  ngOnChanges() {
    if (this.cities.length > 0 && this.displayedColumns.length === 1) {
      this.displayedColumns = this.displayedColumns.concat(Object.keys(this.cities[0]).filter(data => data !== 'city'));
    }
  }
}


