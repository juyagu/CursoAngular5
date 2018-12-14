import { Component } from '@angular/core';

import { Auto } from './auto';
import { Motor } from './auto';
import { Ruedas } from './auto';
import { Auto as AutoSinDI } from './auto-sin-di';
import { useInjector } from './inyector-auto';
import { AutoFactory } from './auto-factory';


@Component({
  selector: 'app-auto',
  template: `
  <h4>Inyección a través del constructor</h4>
  <p>{{auto.drive()}}</p>
  <h4>Sin inyección de dependencias</h4>
  <p>{{autoSinDI.drive()}}</p>
  <h4>Inyección a través del Injector</h4>
  <p>{{inyectorAuto.drive()}}</p>
  <h4>Inyección a través de una Factory</h4>
  <p>{{autoFactory.drive()}}</p>
  `,
  providers: [Auto,Motor,Ruedas]
})
export class AutoComponent{
  autoSinDI = new AutoSinDI;
  inyectorAuto = useInjector();
  autoFactory = (new AutoFactory).crearAuto();
  constructor(private auto:Auto){}
}