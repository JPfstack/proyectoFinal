import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { PRODUCTO } from '../../../Models/productoModel';
import { PEDIDO } from '../../../Models/pedidoModel';
import { CARRITO } from '../../../Models/cartModel';
import { CartService } from 'src/app/cart.service';
import { ProductosService } from 'src/app/productos.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carrito: CARRITO;
  detalle: PRODUCTO[];
  totalProd: any;
  detalleProd: any;
  arrProd: any;

  constructor(private cartService: CartService,
    private productosService: ProductosService) {

  }

  async ngOnInit() {

    const newProdCart = JSON.parse(localStorage.getItem('producto'));
    const productos = await this.productosService.getAllProductos();
    /*   const arrProd = this.totalProd */
    for (let prod of newProdCart) {

      this.totalProd = productos.filter(producto => producto.id_prod == prod);
      console.log(this.totalProd);

    }

    console.log(productos);
    console.log(this.totalProd);





    /* for (let prod of newProdCart) {
      this.detalle = await this.productosService.getProductoById(prod);
      console.log(this.detalle);
      const totalProd = new Array();
      totalProd.push(this.detalle);

      console.log(totalProd.push(this.detalle));




    } */

  }



}
