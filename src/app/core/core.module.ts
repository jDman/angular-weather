import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// storeFreeze not to be used in a production environment
export const metaReducers: MetaReducer<any>[] = [storeFreeze];

const modules = [
  CommonModule,
  RouterModule,
  BrowserAnimationsModule,
  HttpClientModule,
  StoreModule.forRoot({}, { metaReducers }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument() // not for a production environment
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    // Prevent from importing this module twice.
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}
