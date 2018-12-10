import { Component } from '@angular/core';
import { AccesoADatosService } from '../../services/acceso-adatos.service';
import { IPost } from '../../interfaces/index';

@Component({
  selector: 'app-full-response',
  templateUrl: './full-response.component.html',
  styleUrls: ['./full-response.component.css']
})
export class FullResponseComponent {
  post: IPost;
  loadinng: boolean;
  headers: string[];

  constructor(private accesoADatosService: AccesoADatosService) { }
  
  makeRequest(){
    this.loadinng = true;
    this.accesoADatosService.getPostResponse(2)
      .subscribe(res => {
        this.loadinng = false;
        const keys = res.headers.keys();
        this.headers = keys.map(key => 
          `${key}: ${res.headers.get(key)}`);
        this.post = { ...res.body }
      });
  }
}
