/*
Los Observables proveen un soporte para pasar mensajes entre los publicadores y los suscriptores en nuestra aplicación.
Un observable puede devolver multiples valores de cualquier tipo, pero no es ejecutado hasta que un consumidor no se suscribe.
Como publicador, creamos una instancia de Observable que define una función de suscripción. 
Para ejecutar un observable debemos llamar al método subscribe(), pasando un observer. Este es un objeto javascript que define como manejar las notificaciones que recibimos. Este subscribe() retorno un objeto Subscription que tiene un método unsubscribe(), al cual llamamos cuando queremos dejar de recibir las notificaciones.
Métodos de la librería RxJS para crear Observables:
of(...items) - Retorna una instancia Observable que sincrónicamente entrega valores provisto como argumentos.
from(iterable) - Convierte sus argumentos como una instancia de Observable. Este método es comunmente usado para convertir un array en un observable.
*/


import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'servicios';
  myObservable = of(1, 2, 3);
    myObserver = {
      next: x => console.log('El Observer va a tener el próximo valor: ' + x),
      error: err => console.log('El observer tuvo un error: ' + err),
      complete: () => console.log('El observer obtuvo una notificación completa')
    }
  ngOnInit() {
    this.myObservable.subscribe(this.myObserver);
  }
  //Subscripcion a un observer:


  
}
