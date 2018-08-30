import { Component, OnInit } from '@angular/core';
import { ClassEstudiante } from '../../shared/model/class-estudiante';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  private estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente material List');

    this.estudiante1 = new ClassEstudiante(1, 'Hugo', 'Cochabamba');
    console.log('edad estudiante1:', this.estudiante1.getEdad());
    this.estudiante2 = {
      id: 2,
      nombre: 'Paco',
      ciudad: 'Lima'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Luis',
      ciudad: 'Bogota'
    };

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Juana',
        ciudad: 'Santiago'
      };
    }, 3000);

    // setTimeout(function() {

    // }, 3000);
  }

}
