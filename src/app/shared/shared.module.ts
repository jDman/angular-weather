import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatTableModule,
  MatToolbarModule,
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
  ReactiveFormsModule,
  FlexLayoutModule
];

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTableModule,
  MatToolbarModule,
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
