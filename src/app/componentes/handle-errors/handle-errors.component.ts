import { Component} from '@angular/core';

import { AccesoADatosService } from '../../services/acceso-adatos.service';

import { IPost } from '../../interfaces/index';

@Component({
  selector: 'app-handle-errors',
  templateUrl: './handle-errors.component.html',
  styleUrls: ['./handle-errors.component.css']
})
export class HandleErrorsComponent {
  loading = false;
  error:string;
  post: IPost;
  constructor(private accesoADatosService:AccesoADatosService) { }

  makeRequest(){
    this.loading = true;
    this.accesoADatosService.getPostError(1)
      .subscribe(
        res => this.post = res,
        error => this.error = error
      )
  }
  
}
