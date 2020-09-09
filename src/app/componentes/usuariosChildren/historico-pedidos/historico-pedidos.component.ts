import { Component, OnInit } from '@angular/core';
import { CLIENTE } from '../../../../Models/clienteModel';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../clientes.service';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.css']
})
export class HistoricoPedidosComponent implements OnInit {

  clienteId: number;



  constructor(private clientesService: ClientesService) {

  }

  async ngOnInit() {
    const token = localStorage.getItem('token');

    this.clienteId = await this.clientesService.getIdByToken(token)

    console.log(this.clienteId);

  }


}
