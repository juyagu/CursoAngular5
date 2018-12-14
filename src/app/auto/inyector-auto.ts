import { Injector } from '@angular/core';
import { Auto, Motor, Ruedas } from './auto';

export function useInjector(){
  let injector: Injector;

  injector = Injector.create({
    providers: [
      { provide: Auto, deps:[Motor,Ruedas]},
      { provide: Motor, deps:[]},
      { provide: Ruedas, deps:[]}
    ]
  });

  let auto = injector.get(Auto);
  auto.descripcion = 'Inyector';

  return auto;
}