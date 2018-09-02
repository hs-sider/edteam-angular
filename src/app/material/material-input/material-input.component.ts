import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'Luis'
  };
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.usuario.nombre = 'Juan';
    }, 3000);
  }

  onKeyUp($event: TrackEvent) {
    console.log('onKeyup', $event);
  }

  onBlur($event: FocusEvent) {
    console.log('onBlur', $event);
  }
}
