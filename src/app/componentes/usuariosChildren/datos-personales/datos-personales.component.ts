import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  boton: boolean;
  editar: boolean;
  datos: boolean;


  constructor() {
    this.boton = true;
    this.editar = false;
    this.datos = true;
  }

  ngOnInit(): void {
  }


  onEditarPerfil() {
    if (this.boton) {
      this.editar = true;
      this.datos = false;
      this.boton = false;

    }

  }
}
