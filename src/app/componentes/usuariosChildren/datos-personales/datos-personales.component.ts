import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../clientes.service';
import { CLIENTE } from '../../../../Models/clienteModel';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {


  token: any;
  boton: boolean;
  editar: boolean;
  datos: boolean;
  clienteId: number;
  cliente: CLIENTE;
  edicion: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private activatedRoute: ActivatedRoute) {

    this.boton = true;
    this.editar = false;
    this.datos = true;

    this.edicion = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl(),
      id_cliente: new FormControl()
    })


  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.clienteId = params.clienteId;

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


  };


  async onEdicion() {
    const respuestaEdit = await this.clientesService.edicionCliente(this.edicion.value);


    console.log(respuestaEdit);
    console.log(this.clienteId);
  };

  onEditarPerfil() {
    if (this.boton) {
      this.editar = true;
      this.datos = false;
      this.boton = false;
    }
  }
};
