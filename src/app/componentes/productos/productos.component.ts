import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { PRODUCTO } from '../../../Models/productoModel';
import { ClientesService } from 'src/app/clientes.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: PRODUCTO[];
  clienteToken: any;

  constructor(
    private productosService: ProductosService,
    private clientesService: ClientesService) {


  }
  async ngOnInit() {

    this.productos = await this.productosService.getAllProductos();
    console.log(this.productos);

    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)

    console.log(this.clienteToken.clienteId);

  }



}
