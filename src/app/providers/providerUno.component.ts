import { Component,OnInit,Optional } from '@angular/core';


import { LoggerService } from '../logger.service';
import { UpdateLoggerService } from '../update-logger.service';
const template = '{{log}}';

@Component({
  selector: 'providerUno',
  template: template,
  providers: [LoggerService]
})
export class ProviderUnoComponent{
  log: string;
  constructor(logger: LoggerService){
    logger.log('Hola desde el logger provisto con la clase LoggerService');
    this.log = logger.logs[0];
  }
}

@Component({
  selector: 'providerDos',
  template: template,
  providers: [{provide: LoggerService, useClass: LoggerService}]
})
export class ProviderDosComponent{
  log: string;
  constructor(logger: LoggerService){
    logger.log('Hola desde el logger provisto con useClass:LoggerService');
    this.log = logger.logs[0];
  }
}

@Component({
  selector: 'providerTres',
  template: template,
  providers:[{provide: LoggerService, useClass: UpdateLoggerService}]
})
export class ProviderTresComponent {
  log: string;
  constructor(logger: LoggerService){
    logger.log('Hola desde el UpdateLogger');
    this.log = logger.logs[0];
  }
}

export function FuncionLogger(mensaje: string){
  console.log(mensaje);
}

const valorLogger = {
  logs: ['El logger dice "Shhhhhhh!". Provisto a través de "useValue"'],
  log: FuncionLogger
};

@Component({
  selector: 'providerCuatro',
  template: template,
  providers: 
    [{provide: LoggerService, useValue: valorLogger}]
})
export class ProviderCuatroComponent {
  log: string;
  constructor(logger: LoggerService){
    logger.log("Hola desde logger provisto con useValue");
    this.log = logger.logs[0];
  }
}

let un_mensaje = "Hola desde el logger";

@Component({
  selector: 'providerCinco',
  template: template,
  providers: [{ provide: LoggerService, useValue: null}]
})
export class ProviderCincoComponent implements OnInit {
  log: string;
  constructor(@Optional() private logger: LoggerService){
    if(this.logger){
      this.logger.log(un_mensaje);
    }
  }
  

  ngOnInit(){
    this.log = this.logger ? this.logger.logs[0] : 'El logger opcional no está disponible';
  }
}




@Component({
  selector: 'app-providers',
  template: `
    <h2>Distintos tipos de Providers</h2>
    <h4>Provider Uno</h4>
    <p><providerUno></providerUno></p>
    <h4>Provider Dos</h4>
    <p><providerDos></providerDos></p>
    <h4>Provider Tres</h4>
    <p><providerTres></providerTres></p>
    <h4>Provider Cuatro</h4>
    <p><providerCuatro></providerCuatro></p>
    <h4>Provider Cinco</h4>
    <p><providerCinco></providerCinco></p>
  `
})
export class ProvidersComponent{}