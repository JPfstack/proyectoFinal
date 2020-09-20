import { Component, OnInit } from '@angular/core';
import { CLIENTE } from 'src/Models/clienteModel';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: CLIENTE[];
  listaPedidos: any;
  pedidos: boolean;

  constructor(private clientesService: ClientesService) {
    this.pedidos = true;

  }

  ngOnInit(): void {
    this.clientesService.getAllClientes()
      .then(respuesta => {
        console.log(respuesta);
        this.clientes = respuesta;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async onDetalleCliente(pCliente) {
    this.pedidos = false;
    this.listaPedidos = await this.clientesService.getPedidosByIdCliente(pCliente.id_cliente);


    console.log(this.listaPedidos);

  };

  onVolver() {
    this.pedidos = true;
  }

}
