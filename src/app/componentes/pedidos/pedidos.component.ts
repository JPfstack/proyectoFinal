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

      });

    this.pedidosService.getAllPedidos()
      .then(respuesta => {
        console.log(respuesta);
        this.pedidos = respuesta;
      })
      .catch(error => {
        console.log(error);

      });

  }
  async onChange($event) {
    console.log($event.target.value);

    if ($event.target.value == 'todos') {
      this.pedidos = await this.pedidosService.getAllPedidos();
    } else {
      this.pedidos = await this.pedidosService.getAllPedidoRealizado();
    } if ($event.target.value == 'pendientes') {
      this.pedidos = await this.pedidosService.getAllPedidosAdmin();
    }
  }



  async onPedido(pEstado) {
    console.log(pEstado);
    if (pEstado.estado === "pendiente") {
      const resultado = await this.pedidosService.changeToRealizado(pEstado);
      console.log(resultado);
      this.ngOnInit();
    }
  };


}
