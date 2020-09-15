import { Component, OnInit } from '@angular/core';
import { CLIENTE } from './../../../../Models/clienteModel';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../clientes.service';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  clienteToken: any;
  clienteId: number;
  productosFavoritos: any;
  id_cliente: number;
  favorito: any;
  detallefavorito: any;
  productosFav: any;
  star: boolean;



  constructor(
    private clientesService: ClientesService,
    private productosService: ProductosService) {

    this.star = true;
    this.productosFav = new Array();

  }


  async ngOnInit() {
    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)

    console.log(this.clienteToken.clienteId);

    this.productosFavoritos = await this.productosService.getFavoritos(this.clienteToken.clienteId);

    console.log(this.productosFavoritos);


    this.productosFav = this.productosFavoritos.filter(favorito => favorito.id_cliente == this.clienteToken.clienteId);

    console.log(this.productosFav);


  };

  async onDeleteFav(pProducto) {
    const cliente = this.clienteToken.clienteId;
    console.log(cliente);
    const producto = pProducto.id_prod;
    console.log(producto);

    const prod = await this.productosService.getIdFav(this.clienteToken.clienteId, producto)
    console.log(prod[0].id, prod);

    const respuesta = await this.productosService.removeFav(prod[0].id);
    console.log(respuesta);

    this.ngOnInit();

  };



}
