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



  constructor(
    private clientesService: ClientesService,
    private productosService: ProductosService) {

    this.productosFav = new Array();

  }


  async ngOnInit() {
    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)

    console.log(this.clienteToken.clienteId);

    this.productosFavoritos = await this.productosService.getFavoritos(this.clienteToken.clienteId);

    console.log(this.productosFavoritos);


    this.productosFav = this.productosFavoritos.filter(favorito => favorito.id_cliente == this.clienteToken.clienteId);
    /*     console.log(productosFav);
     */
    /*  for (let favorito of this.productosFavoritos) {
 
       if (favorito.id_cliente == this.clienteToken.clienteId) {
         const favoritoCliente = favorito.id_prod;
 
 
         console.log(favorito);
         console.log(favoritoCliente);
 
 
       }
     } */




  }

}
