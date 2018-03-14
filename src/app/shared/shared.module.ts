import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

/**
 * Shared modules to be imported and exported.
 */
const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatRippleModule,
  MatTableModule,
  MatButtonToggleModule,
  CdkTableModule
];

@NgModule({
  imports: [
    ...modules,
    ...materialModules
  ],
  declarations: [SearchComponent, ResultsComponent],
  exports: [
    SearchComponent,
    ResultsComponent,
    ...materialModules
  ]
})
export class SharedModule { }
