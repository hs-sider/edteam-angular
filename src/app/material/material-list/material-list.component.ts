import { Component, OnInit } from '@angular/core';
import { ClassEstudiante } from '../../shared/model/class-estudiante';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  listaEstudiantes: Estudiante[];

  readonly DEFAULT_PICTURE = 'https://www.sp-ps.ch/sites/default/files/person/placeholder_4.png';

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente material List');

    this.estudiante1 = new ClassEstudiante(1, 'Hugo', 'Cochabamba');
    console.log('edad estudiante1:', this.estudiante1.getEdad());
    this.estudiante2 = {
      id: 2,
      nombre: 'Paco',
      ciudad: 'Lima',
      fotoURL: 'https://i.imgur.com/YKhObkG.png'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Luis',
      ciudad: 'Bogota',
      fotoURL: 'https://www.highcountryconservation.org/wp-content/uploads/sites/16/bfi_thumb/generic_image_missing-profile-ndgjx0pdbq2vm0651alslt82jmpv89abm4tk5qp34c.jpg'
    };

    this.listaEstudiantes = [this.estudiante1, this.estudiante2, this.estudiante3];

    setTimeout(() => {
      this.listaEstudiantes[2] = {
        id: 4,
        nombre: 'Juana',
        ciudad: 'Santiago'
        // ,fotoURL: 'http://www.munny.dk/wp-content/uploads/2017/11/Male-missing.png'
      };
    }, 3000);

    // setTimeout(function() {

    // }, 3000);
    }

    onMouseClick($event: Estudiante) {
      console.log($event);
      console.log($event.nombre);
    }
}
