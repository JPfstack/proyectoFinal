import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { PRODUCTO } from '../../../Models/productoModel';
import { PEDIDO } from '../../../Models/pedidoModel';
import { CARRITO } from '../../../Models/cartModel';
import { CartService } from 'src/app/cart.service';
import { ProductosService } from 'src/app/productos.service';
import { PRODPEDIDO } from 'src/Models/productoPedidoModel';
import { ClientesService } from 'src/app/clientes.service';



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
  precioTotal: number;
  clienteToken: any;
  producto: PRODUCTO;


  constructor(private cartService: CartService,
    private productosService: ProductosService,
    private clientesService: ClientesService) {

    this.detalle = new Array();
    this.arrCarrito = new Array();
    this.arrPedido = new Array();
    this.precioTotal = 0;
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

    //precio total del carrito disponible
    this.precioTotal = this.calcularTotalPrecio();
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

    this.precioTotal = this.calcularTotalPrecio();

    //prueba
    /* const arrPedido = new CARRITO(pProducto.id_producto, pProducto.id_cliente, pProducto.id_pedido, pProducto.imagen, precioTotal, pProducto.cantidad);
    console.log(arrPedido, this.carrito);
    localStorage.setItem('pedido', JSON.stringify(this.arrPedido));
 */
    /* 
        pProducto.cantidad = $event.target.value;
        localStorage.setItem('carrito', JSON.stringify(this.arrCarrito)); */
    /* console.log(arrCarrito); */


  }

  calcularTotalPrecio() {
    let total = 0;
    for (let item of this.arrCarrito) {
      total += item.cantidad * item.precio;
    }
    return total;
  }

  calcularTotalCantidad() {
    let total = 0;
    for (let item of this.arrCarrito) {
      total += item.cantidad;
    }
    return total;
  }

  async onEnviar() {
    //id cliente en el localstorage
    const id_cliente = JSON.parse(localStorage.getItem('id_cliente'));
    const direccion = await this.clientesService.getDetalleCliente(id_cliente);
    console.log(direccion.direccion);

    const newPedido = new PEDIDO(0, this.calcularTotalCantidad(), new Date().toDateString(), this.calcularTotalPrecio(), id_cliente, "", direccion.direccion, "pendiente");

    const pedidoNuevo = await this.cartService.newPedido(newPedido);
    console.log(pedidoNuevo);
    console.log("ël supuesto id");
    console.log(pedidoNuevo.insertId);

    for (let item of this.arrCarrito) {
      const newProdPedido = new PRODPEDIDO(item.id_producto, pedidoNuevo.insertId, item.cantidad)
      const prodPedidoNuevo = this.cartService.addProdPedido(newProdPedido);
      console.log(prodPedidoNuevo);
    }
  }

}

[]





