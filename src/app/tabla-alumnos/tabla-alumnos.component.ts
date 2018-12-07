import { Component } from '@angular/core';

import { Alumno } from '../entities/alumno';

const ALUMNOS = [
  new Alumno('Jose', 'Perez', 'PHP', '../../assets/images/foto.jpg'),
  new Alumno('Mariela', 'Gonzalez', 'Angular', '../../assets/images/foto.jpg'),
  new Alumno('Marcelo', 'Guerra', 'JAVA', '../../assets/images/foto.jpg')
];

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {
  alumnos: Alumno[] = ALUMNOS;
  saludar: boolean = true;
  alumnoSeleccionado: Alumno;
  btnOk = 'btn btn-success';
  btnNo = 'btn btn-danger';

  constructor() { }

  establerSaludo() {
    if (this.saludar) {
      this.saludar = false;
    } else {
      this.saludar = true;
    }
  }


  verAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }


}
