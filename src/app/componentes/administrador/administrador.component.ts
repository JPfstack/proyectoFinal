import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { CLIENTE } from '../../../Models/clienteModel';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  clientes: CLIENTE[];

  constructor(private clientesService: ClientesService) {

  }

  ngOnInit(): void {
    this.clientesService.getAllClientes()
      .then(respuesta => {
        console.log(respuesta);
        this.clientes = respuesta;
      })
      .catch(error => {
        console.log(error);
      })
  }

}
