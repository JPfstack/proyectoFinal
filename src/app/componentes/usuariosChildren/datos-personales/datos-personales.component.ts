import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../clientes.service';
import { CLIENTE } from '../../../../Models/clienteModel';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  boton: boolean;
  editar: boolean;
  datos: boolean;
  clienteId: number;
  cliente: CLIENTE;

  constructor(private clientesService: ClientesService,
    private activatedRoute: ActivatedRoute) {
    this.boton = true;
    this.editar = false;
    this.datos = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clienteId = params.clienteId
      console.log(this.clienteId);

    })
    this.clientesService.getDetalleCliente(this.clienteId)
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
