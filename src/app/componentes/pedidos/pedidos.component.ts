import { Component, OnInit } from '@angular/core';
import { PEDIDO } from '../../../Models/pedidoModel';
import { PedidosService } from '../../pedidos.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})


export class PedidosComponent implements OnInit {

  pedidos: PEDIDO[];

  constructor(private pedidosService: PedidosService) {

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

      });

    this.pedidosService.getAllPedidoRealizado()
      .then(respuesta => {
        console.log(respuesta);
        this.pedidos = respuesta;
      })
      .catch(error => {
        console.log(error);

      })

  }
  async onChange($event) {
    if ($event.target.value === 'Pedidos Pendientes') {
      console.log($event.target.value);

      this.pedidos = await this.pedidosService.getAllPedidosAdmin();
    } else {

      this.pedidos = await this.pedidosService.getAllPedidos();
    }
  }

}
