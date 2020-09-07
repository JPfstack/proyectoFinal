import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { PedidosService } from '../../pedidos.service';
import { CLIENTE } from '../../../Models/clienteModel';
import { PEDIDO } from '../../../Models/pedidoModel';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  pedidos: PEDIDO[];
  clientes: CLIENTE[];

  constructor(private clientesService: ClientesService,
    private pedidosService: PedidosService) {

  }

  ngOnInit(): void {

    this.pedidosService.getAllPedidos()
      .then(respuesta => {
        console.log(respuesta);
        this.pedidos = respuesta;
      })
      .catch(error => {
        console.log(error);

      });

    this.pedidosService.getAllPedidosAdmin()
      .then(respuesta => {
        console.log(respuesta);
        this.pedidos = respuesta;
      })
      .catch(error => {
        console.log(error);

      })

    /* this.clientesService.getAllClientes()
      .then(respuesta => {
        console.log(respuesta);
        this.clientes = respuesta;
      })
      .catch(error => {
        console.log(error);
      }) */
  }

  async onChange($event) {
    if ($event.target.value === 'Pedidos Pendientes') {
      this.pedidos = await this.pedidosService.getAllPedidosAdmin();
    } else {

      this.pedidos = await this.pedidosService.getAllPedidos();
    }
  }

}
