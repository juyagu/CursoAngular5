import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent {
  mensajeClick:string = '';
  constructor() { }
  hicisteClick():void{
    this.mensajeClick= "Hola, que bueno verte!";
  }


}
