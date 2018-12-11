import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleRequestComponent } from './componentes/simple-request/simple-request.component';
import { RequestTipadoComponent } from './componentes/request-tipado/request-tipado.component';
import { FullResponseComponent } from './componentes/full-response/full-response.component';
import { HandleErrorsComponent } from './componentes/handle-errors/handle-errors.component';
import { EnvioDatosComponent } from './componentes/envio-datos/envio-datos.component';
import { ActualizarDatosComponent } from './componentes/actualizar-datos/actualizar-datos.component';
import { BorrarDatosComponent } from './componentes/borrar-datos/borrar-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRequestComponent,
    RequestTipadoComponent,
    FullResponseComponent,
    HandleErrorsComponent,
    EnvioDatosComponent,
    ActualizarDatosComponent,
    BorrarDatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
