import { Component } from '@angular/core';

import { AccesoADatosService } from '../../services/acceso-adatos.service';
import { IPost } from '../../interfaces/index';

const post:IPost = {
  title: 'Curso Angular',
  body: 'Curso desarrollado para el aprendizaje de este framework desarrollado por la gente de Google',
  userId: 1,
  id: 0
};


@Component({
  selector: 'app-envio-datos',
  templateUrl: './envio-datos.component.html',
  styleUrls: ['./envio-datos.component.css']
})
export class EnvioDatosComponent {
  loading: boolean;
  postResponse: IPost;
  constructor(private accesoADatosService : AccesoADatosService) { }
  makeRequest(){
    this.accesoADatosService.addPost(post)
      .subscribe(post => this.postResponse = post);
  }
}
