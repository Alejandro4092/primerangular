import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { DeportesComponent } from '../components/deportes/deportes.component';
// import { PrimerComponent } from '../components/primercomponent/primer.components';
// import { HooksAngularComponent } from '../components/hooksangular/hooksangular.component';
import { DeportesV2Component } from '../components/deportesv2/deportesv2.component';
import { FormsBinding } from '../components/formsbinding/formsbinding.component';
import { SumarNumerosComponent } from '../components/sumarnumeros/sumarnumeros.component';
import { Prueba } from './components/prueba/prueba';
import { Prueba2Component } from './components/prueba2.component/prueba2.component';

@NgModule({
  declarations: [
    App,
  // PrimerComponent,
  // HooksAngularComponent
  DeportesComponent,
    DeportesV2Component,
    FormsBinding,
    SumarNumerosComponent,
    Prueba,
    Prueba2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
