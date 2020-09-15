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
  arrPedido: PEDIDO[];


  constructor(private cartService: CartService,
    private productosService: ProductosService) {

    this.detalle = new Array();
    this.arrCarrito = new Array();
    this.arrPedido = new Array();
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

  onEliminar(pIdProd) {
    const idProd = pIdProd.toString();
    const deleteProducto = JSON.parse(localStorage.getItem('producto'));
    const prodDelete = deleteProducto.indexOf(idProd);
    console.log(deleteProducto, prodDelete);

    deleteProducto.splice(prodDelete, 1)
    console.log(deleteProducto);

    localStorage.setItem('producto', JSON.stringify(deleteProducto));

  }

  onChange($event, pProducto) {
    const precioTotal = pProducto.precio * pProducto.cantidad;
    pProducto.cantidad = $event.target.value;


    //prueba
    const arrPedido = new CARRITO(pProducto.id_producto, pProducto.id_cliente, pProducto.id_pedido, pProducto.imagen, precioTotal, pProducto.cantidad);
    console.log(arrPedido, this.carrito);
    localStorage.setItem('pedido', JSON.stringify(this.arrPedido));



    /* 
        pProducto.cantidad = $event.target.value;
        localStorage.setItem('carrito', JSON.stringify(this.arrCarrito)); */
    /* console.log(arrCarrito); */


  }
  onEnviar() {
    /* const DatosPedido  */

  }

}







