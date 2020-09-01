import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../clientes.service';
import { CLIENTE } from '../../../../Models/clienteModel';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  boton: boolean;
  editar: boolean;
  datos: boolean;

  cliente: CLIENTE;

  constructor(private clientesService: ClientesService) {
    this.boton = true;
    this.editar = false;
    this.datos = true;
  }

  ngOnInit(): void {
    this.clientesService.getDetalleCliente()
      .then(respuesta => {
        this.cliente = respuesta;
        console.log(respuesta);

      })
      .catch(error => {
        console.log(error);
      })


  }


  onEditarPerfil() {
    if (this.boton) {
      this.editar = true;
      this.datos = false;
      this.boton = false;

    }

  }
}
