import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-request',
  templateUrl: './simple-request.component.html',
  styleUrls: ['./simple-request.component.css']
})
export class SimpleRequestComponent {
  datos: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  makeRequest():void{
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.datos = data;
        this.loading = false;
      });
  }
}
