import { Component } from '@angular/core';

import { IPost } from 'src/app/interfaces';
import { AccesoADatosService } from '../../services/acceso-adatos.service';

@Component({
  selector: 'app-borrar-datos',
  templateUrl: './borrar-datos.component.html',
  styleUrls: ['./borrar-datos.component.css']
})
export class BorrarDatosComponent {
  data: string;
  constructor(private accesoADatosService : AccesoADatosService) { }
  
  makeRequest(){
    this.accesoADatosService.deletePost(1)
      .subscribe(() => this.data = "Datos borrados correctamente", error => this.data = error);
  }

}
