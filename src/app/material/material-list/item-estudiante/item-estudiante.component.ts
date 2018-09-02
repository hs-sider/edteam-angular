import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';


@Component({
  selector: 'ed-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  readonly DEFAULT_PICTURE = 'https://www.sp-ps.ch/sites/default/files/person/placeholder_4.png';

  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit() {
  }

  onClick(estudiante: Estudiante) {
    this.onMouseClick.emit(estudiante);
  }
}
