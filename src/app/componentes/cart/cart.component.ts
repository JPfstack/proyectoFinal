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
  totalProd: PRODUCTO;
  arrCarrito: CARRITO[];

  constructor(private cartService: CartService,
    private productosService: ProductosService) {
    this.detalle = new Array();

    this.arrCarrito = new Array();
  }

  async ngOnInit() {

    const newProdCart = JSON.parse(localStorage.getItem('producto'));
    const productos = await this.productosService.getAllProductos();
    /*   const arrProd = this.totalProd */
    for (let prod of newProdCart) {
      const producto = await this.productosService.getProductoById(prod);
      this.detalle.push.apply(this.detalle, producto);
      console.log(this.detalle);
    }
    for (let prod of this.detalle) {
      const carrito = new CARRITO(prod.id_prod, 1, 1, prod.imagen, prod.precio, 1);
      this.arrCarrito.push(carrito);
    }

  }









}
