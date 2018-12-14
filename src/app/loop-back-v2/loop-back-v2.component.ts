import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-back-v2',
  templateUrl: './loop-back-v2.component.html',
  styleUrls: ['./loop-back-v2.component.css']
})
export class LoopBackV2Component {
  values: string='';
  
  constructor() { }

  onKey(value: string){
    this.values += value + ' | ';
  }
}
