import { Component } from '@angular/core';

import { IPost } from 'src/app/interfaces';
import { AccesoADatosService } from '../../services/acceso-adatos.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent {
  postResponse: IPost;
  loading: boolean;

  constructor(private accesoADatosService : AccesoADatosService) { }

  makeRequest(){
    this.loading = true;
    const post:IPost = {
      title : "Clase Angular - Modificamos el post",
      body: "Post con contenido actualizado",
      userId:1,
      id: 1
    };
    this.accesoADatosService.updatePost(post)
      .subscribe(post => {
        this.postResponse = post;
        this.loading = false;
      })
  }

}
