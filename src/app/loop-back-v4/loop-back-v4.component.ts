import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-back-v4',
  templateUrl: './loop-back-v4.component.html',
  styleUrls: ['./loop-back-v4.component.css']
})
export class LoopBackV4Component {
  values:string = '';
  constructor() { }
  update(value:string){
    this.values=value;
  }
}
