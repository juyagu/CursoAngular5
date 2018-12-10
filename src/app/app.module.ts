import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleRequestComponent } from './componentes/simple-request/simple-request.component';
import { RequestTipadoComponent } from './componentes/request-tipado/request-tipado.component';
import { FullResponseComponent } from './componentes/full-response/full-response.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRequestComponent,
    RequestTipadoComponent,
    FullResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
