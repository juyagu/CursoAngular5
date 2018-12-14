import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-back-v3',
  templateUrl: './loop-back-v3.component.html',
  styleUrls: ['./loop-back-v3.component.css']
})
export class LoopBackV3Component {
  values: string= '';
  constructor() { }

  onEnter(value:string){
    this.values = value;
  }
}
