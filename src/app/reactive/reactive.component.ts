import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registroForm = new FormGroup({
    nombre : new FormControl(''),
    apellido: new FormControl('')
  });

  onSubmit(){
    console.log(this.registroForm.value);
  }

}
