import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class UpdateLoggerService extends LoggerService {

  constructor() { 
    super();
  }

  log(message:string){
    let nombre = "Alumno Angular 5";
    super.log(`Mnesaje para el ${nombre}: ${message}`);
  }
}
