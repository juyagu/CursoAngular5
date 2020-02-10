/*
Los Observables proveen un soporte para pasar mensajes entre los publicadores y los suscriptores en nuestra aplicación.
Un observable puede devolver multiples valores de cualquier tipo, pero no es ejecutado hasta que un consumidor no se suscribe.
Como publicador, creamos una instancia de Observable que define una función de suscripción. 
Para ejecutar un observable debemos llamar al método subscribe(), pasando un observer. Este es un objeto javascript que define como manejar las notificaciones que recibimos. Este subscribe() retorno un objeto Subscription que tiene un método unsubscribe(), al cual llamamos cuando queremos dejar de recibir las notificaciones.
Métodos de la librería RxJS para crear Observables:
of(...items) - Retorna una instancia Observable que sincrónicamente entrega valores provisto como argumentos.
from(iterable) - Convierte sus argumentos como una instancia de Observable. Este método es comunmente usado para convertir un array en un observable.

--Creando una nueva dependencia--
Angular tiene su propio DI framework, el cual es usado en el diseño de aplicaciones Angular para aumentar su eficiencia y modularidad.
Las dependencias son servicios u objetos que una clase necesita para realizar su función. DI es un patrón de código al cual  una clase solicita dependencias de fuentes externas en lugar de crearlas por sí mismas
El decorador @Injectable() es el ingrediente esencial para toda definición de un Servicio Angular.
Tener varias clases en un mismo archivo puede ser confuso, es por eso que se recomienda que se definan los componentes y los servicios en archivos separados.
El decorador @Injectable() establece que un servicio puede ser inyectado, pero Angular en realidad no lo puede inyectar en ningún lugar hasta que se configure el Angular dependency injector con un provider de ese servicio.
Angular crea inyectores por nosotros mientras se ejecuta la aplicacion, empezando por el inyector raiz que se crea durante el proceso de lanzamiento de la aplicación.
Un provider le dice al inyector como crear el servicio. 
Se pueden configurar los inyectores en tres niveles diferentes:
- En el decorador Injectable() del servicio en sí.
- En el decorador @NgModule().
- En el decorador @Component()
El decorador Injectable() tiene una opción "provideIn", al cual especificamos el provider del servicio con un root injector, o con el inyector de un NgModule específico.

Cuando usamos el decorador @Optional(), debemos estar preparados para recibir un valor null. 
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
