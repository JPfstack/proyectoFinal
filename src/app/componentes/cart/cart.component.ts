import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { PRODUCTO } from '../../../Models/productoModel';
import { PEDIDO } from '../../../Models/pedidoModel';
import { CARRITO } from '../../../Models/cartModel';
import { CartService } from 'src/app/cart.service';
import { ProductosService } from 'src/app/productos.service';
import { ClientesService } from '../../clientes.service';


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
  clienteToken: any;
  producto: PRODUCTO;
  detalleCliente: any;
  numProducto: number;
  cantidad: number;
  precio: number;
  fecha: Date;
  newPedido: PEDIDO;

  constructor(private cartService: CartService,
    private productosService: ProductosService,
    private clientesService: ClientesService) {

    this.detalle = new Array();
    this.arrCarrito = new Array();
    this.arrPedido = new Array();


  }

  async ngOnInit() {

    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)
    console.log(this.clienteToken.clienteId);

    const newProdCart = JSON.parse(localStorage.getItem('producto'));
    const productos = await this.productosService.getAllProductos();
    /*   const arrProd = this.totalProd */
    for (let prod of newProdCart) {
      this.producto = await this.productosService.getProductoById(prod);
      this.detalle.push.apply(this.detalle, this.producto);
      console.log(this.detalle);
    }
    for (let prod of this.detalle) {
      const carrito = new CARRITO(prod.id_prod, this.clienteToken.clienteId, prod.imagen, prod.precio, 1);
      this.arrCarrito.push(carrito);
      console.log(this.arrCarrito);

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
    /* const precioTotal = pProducto.precio * pProducto.cantidad;
    pProducto.cantidad = $event.target.value; */


    //prueba
    /*  const arrPedido = new CARRITO(pProducto.id_producto, pProducto.id_cliente, pProducto.id_pedido, pProducto.imagen, precioTotal, pProducto.cantidad);
     console.log(arrPedido, this.carrito);
     localStorage.setItem('pedido', JSON.stringify(this.arrPedido)); */




    pProducto.cantidad = $event.target.value;
    pProducto.precio = pProducto.precio * pProducto.cantidad;
    localStorage.setItem('carrito', JSON.stringify(this.arrCarrito));
    console.log(this.arrCarrito);


  }
  async onEnviar() {
    const pedidoCompleto = JSON.parse(localStorage.getItem('carrito'));
    this.detalleCliente = await this.clientesService.getDetalleCliente(this.clienteToken.clienteId);

    console.log(pedidoCompleto);
    console.log(this.clienteToken);
    console.log(this.detalleCliente.direccion);

    for (let nombreProd of this.detalle) {
      const nombreProducto = nombreProd.nombre;

    }
    for (let pedido of pedidoCompleto) {
      this.numProducto = pedido.id_producto;
      this.cantidad = pedido.cantidad;
      this.precio = pedido.precio;
      let precioTotal = 0;
      precioTotal += pedido.precio;
      console.log(precioTotal);

      /*    this.fecha = new Date();
   
   
         const newPedido = new PEDIDO[this.fecha, this.numProducto, this.clienteToken.clienteId, this.cantidad, this.precio];
         console.log(newPedido);
         console.log(pedido);
         console.log(pedido.cantidad);
   
       } */




    }
  }

}







