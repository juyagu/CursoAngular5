import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  id:string;
  imgNoticia1 = 'assets/img/noticia1.jpg';
  imgNoticia2 = 'assets/img/noticia2.jpg';
  imgNoticia3 = 'assets/img/noticia3.jpg';
  imgNoticia4 = 'assets/img/noticia4.jpg';
  constructor(activatedRoute : ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {this.id = params['id'];});
  }

  ngOnInit() {
  }

}
