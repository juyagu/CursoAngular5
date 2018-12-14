import { Motor,Ruedas } from './auto';

export class Auto {
  public motor: Motor;
  public ruedas: Ruedas;
  public descripcion = 'Sin DI';

  constructor(){
    this.motor = new Motor();
    this.ruedas = new Ruedas();
  }

  drive(){
    return `${this.descripcion} Auto con ${this.motor.cilindros} cilindros y ruedas ${this.ruedas.make}`;
  }
}