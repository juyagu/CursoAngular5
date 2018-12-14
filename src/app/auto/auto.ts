import { Injectable } from '@angular/core';

export class Motor{
  public cilindros = 4;
}

export class Ruedas{
  public make = 'Flinstone';
  public modelo = 'Square';
}

@Injectable()
export class Auto {
  public descripcion = 'DI';

  constructor(public motor: Motor, public ruedas:Ruedas){}

  drive(){
    return `${this.descripcion} auto con ${this.motor.cilindros} cilindros y ruedas ${this.ruedas.make}`;
  }
}
