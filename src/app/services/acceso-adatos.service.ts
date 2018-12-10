import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IPost } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class AccesoADatosService {

  constructor(private http:HttpClient) { }

  getPost(idPost: number){
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + idPost);
  }

  getPostResponse(idPost: number){
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + idPost, {observe: 'response'});
  }


}
