import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
  values="";
  valuesBis="";
  constructor() { }
  
  onKey(event: any){
    console.log(event);
    this.values += event.target.value + ' | ';
  }

  onKeyBoard(event: KeyboardEvent){
    this.valuesBis += (<HTMLInputElement>event.target).value + " | ";
  }
}
