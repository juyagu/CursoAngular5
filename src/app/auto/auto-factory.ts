import { Auto, Motor, Ruedas } from './auto';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';

export class AutoFactory{
  crearAuto(){
    let auto = new Auto(this.crearMotor(),this.crearRuedas());
    auto.descripcion = "Factory";

    return auto;
  }

  crearMotor(){
    return new Motor();
  }

  crearRuedas(){
    return new Ruedas();
  }
}