import { Component } from '@angular/core';

import { IPost } from '../../interfaces/index';
import { AccesoADatosService } from '../../services/acceso-adatos.service';

@Component({
  selector: 'app-request-tipado',
  templateUrl: './request-tipado.component.html',
  styleUrls: ['./request-tipado.component.css']
})
export class RequestTipadoComponent{
  post: IPost;
  loading: boolean;

  constructor(private accesoADatosService: AccesoADatosService) { }

  makeRequest(){
    this.loading = true;
    this.accesoADatosService.getPost(3)
      .subscribe((data: IPost) => {
        this.loading = false;
        this.post = { ...data}
      });
  }
}
