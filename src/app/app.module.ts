import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { ProvidersComponent } from './providers/providerUno.component';
import { ProviderUnoComponent } from './providers/providerUno.component';
import { ProviderDosComponent } from './providers/providerUno.component';
import { ProviderTresComponent } from './providers/providerUno.component';
import { ProviderCuatroComponent } from './providers/providerUno.component';
import { ProviderCincoComponent } from './providers/providerUno.component';



@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    ProvidersComponent,
    ProviderUnoComponent,
    ProviderDosComponent,
    ProviderTresComponent,
    ProviderCuatroComponent,
    ProviderCincoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
