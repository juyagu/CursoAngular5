import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';

import { IPost } from '../interfaces/index';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


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

  getPostError(idPost: number){
    return this.http.get<IPost>("https://noexiste.com")
      .pipe(
        catchError(this.handleError)
      )
  }

  addPost(post: IPost):Observable<IPost> {
    return this.http.post<IPost>("https://jsonplaceholder.typicode.com/posts",post,httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  updatePost(post: IPost):Observable<IPost>{
    return this.http.put<IPost>("https://jsonplaceholder.typicode.com/posts/1",post,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePost(id: number): Observable<{}> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete(url,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocurrió un error: ', error.error.message);
    }else{
      console.error(`El backend retornó el código ${error.status}, El cuerpo del mensaje de error es: ${error.message}`);
    }
    return throwError('Algo malo sucedió; por favor intente más tarde');
  }

}
