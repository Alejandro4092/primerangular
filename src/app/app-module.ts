import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { DeportesComponent } from '../components/deportes/deportes.component';
// import { PrimerComponent } from '../components/primercomponent/primer.components';
// import { HooksAngularComponent } from '../components/hooksangular/hooksangular.component';
import { DeportesV2Component } from '../components/deportesv2/deportesv2.component';

@NgModule({
  declarations: [
    App,
  // PrimerComponent,
  // HooksAngularComponent
  DeportesComponent,
    DeportesV2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
