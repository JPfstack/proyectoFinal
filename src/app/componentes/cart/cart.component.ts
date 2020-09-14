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
  detalle: PRODUCTO;
  totalProd: PRODUCTO[];

  constructor(private cartService: CartService,
    private productosService: ProductosService) {
  }

  async ngOnInit() {

    const newProdCart = JSON.parse(localStorage.getItem('producto'));
    console.log(newProdCart);

    for (let prod of newProdCart) {
      this.detalle = await this.productosService.getProductoById(prod);
      this.totalProd.push(this.detalle);
      console.log(this.totalProd);
      let prod1, prod2, prod3
      [prod1, prod2, prod3] = this.totalProd
      console.log(prod1, prod2, prod3);
    }


















  }



}
