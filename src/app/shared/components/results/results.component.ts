import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Weather } from '../../../interfaces/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns = ['city', 'temp1', 'temp2', 'temp3', 'temp4'];
  dataSource$: Observable<Element[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const params = {
      q: 'london',
      cnt: '4',
      units: 'metric',

    };

    this.dataSource$ = this
      .http
      .get('http://api.openweathermap.org/data/2.5/forecast', { params })
      .pipe(
        filter(data => data != null ),
        map((results: Weather) => {
         return [{
           city: results.city.name,
           temp1: results.list[0].main.temp,
           temp2: results.list[1].main.temp,
           temp3: results.list[2].main.temp,
           temp4: results.list[3].main.temp
         }];
        })
      );
  }
}

export interface Element {
  city: string;
  temp1: number;
  temp2: number;
  temp3: number;
  temp4: number;
}


