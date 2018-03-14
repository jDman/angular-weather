import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

import { map } from 'rxjs/operators';

import { Weather } from '../../../interfaces/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns = ['city', 'temp1', 'temp2', 'temp3', 'temp4'];
  dataSource: Element[] = [];
  test;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const params = {
      q: 'london',
      cnt: '4',
      units: 'metric',

    };
    this.dataSource = [
      {city: 'London', temp1: 1, temp2: 6, temp3: 5, temp4: 4},
      {city: 'Bristol', temp1: 4, temp2: 7, temp3: 3, temp4: 3},
      {city: 'Brighton', temp1: 6, temp2: 4, temp3: 4, temp4: 3},
      {city: 'Bournemouth', temp1: 9, temp2: 5, temp3: 3, temp4: 2},
      {city: 'Manchester', temp1: 1, temp2: 4, temp3: 3, temp4: 2}
    ];

    this.test = this
      .http
      .get('http://api.openweathermap.org/data/2.5/forecast', { params })
      .pipe(
        map((results: Weather) => {
         return results;
        })
      )
      .subscribe(results => console.log(results));
  }
}

export interface Element {
  city: string;
  temp1: number;
  temp2: number;
  temp3: number;
  temp4: number;
}


