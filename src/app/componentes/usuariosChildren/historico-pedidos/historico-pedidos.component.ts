import { Component, OnInit } from '@angular/core';
import { CLIENTE } from '../../../../Models/clienteModel';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../clientes.service';
import { PEDIDO } from '../../../../Models/pedidoModel';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.css']
})
export class HistoricoPedidosComponent implements OnInit {

  clienteId: any;
  clienteToken: any;
  listaPedidos: PEDIDO[];
  pedido: PEDIDO;




  constructor(
    private clientesService: ClientesService,
    private cartService: CartService
  ) {

  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token);
    this.clienteId = this.clienteToken.clienteId;


    this.listaPedidos = await this.clientesService.getPedidosByIdCliente(this.clienteId);


    console.log(this.listaPedidos);

  }

}





