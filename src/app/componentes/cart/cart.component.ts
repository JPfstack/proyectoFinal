import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { PRODUCTO } from '../../../Models/productoModel';
import { PEDIDO } from '../../../Models/pedidoModel';
import { CARRITO } from '../../../Models/cartModel';
import { CartService } from 'src/app/cart.service';
import { ProductosService } from 'src/app/productos.service';
import { PRODPEDIDO } from 'src/Models/productoPedidoModel';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';
import { DatosPersonalesComponent } from '../usuariosChildren/datos-personales/datos-personales.component';


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
  nombreProd: string;
  cantidadProd: number;
  descripcion: string;
  disponibilidad: number;
  prod: PRODUCTO;
  vacio: boolean;
  pedidoOK: boolean;
  maxima: boolean;


  constructor(private cartService: CartService,
    private productosService: ProductosService,
    private clientesService: ClientesService,
    private router: Router) {

    this.detalle = new Array();
    this.arrCarrito = new Array();
    this.arrPedido = new Array();
    this.precioTotal = 0;
    this.vacio = false;
    this.pedidoOK = false;
    this.maxima = false;
  }

  async ngOnInit() {

    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)
    console.log(this.clienteToken.clienteId);

    const newProdCart = JSON.parse(localStorage.getItem('producto'));
    if (newProdCart && newProdCart.length != 0) {

      this.vacio = false;
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

    } else {
      this.vacio = true;

    }

  }

  onEliminar(pIdProd) {
    const deleteProducto = JSON.parse(localStorage.getItem('producto'));

    const idProd = pIdProd.toString();

    const prodDelete = deleteProducto.indexOf(idProd);
    console.log(deleteProducto, prodDelete);

    deleteProducto.splice(prodDelete, 1)
    console.log(deleteProducto);

    localStorage.setItem('producto', JSON.stringify(deleteProducto));

  }

  async onChange($event, pProducto) {
    const precioTotal = pProducto.precio * pProducto.cantidad;
    pProducto.cantidad = $event.target.value;
    console.log(pProducto.id_producto);

    this.prod = await this.productosService.getProductoById(pProducto.id_producto);
    this.disponibilidad = parseInt(this.prod[0].disponibilidad);


    this.precioTotal = this.calcularTotalPrecio();
    pProducto.cantidad = $event.target.value;
    localStorage.setItem('carrito', JSON.stringify(this.arrCarrito));

  };


  calcularTotalPrecio() {
    let total = 0;
    for (let item of this.arrCarrito) {
      total += item.cantidad * item.precio;
    }
    return total;
  };

  calcularTotalCantidad() {
    let total = 0;
    for (let item of this.arrCarrito) {
      total += item.cantidad;
    }
    return total;
  };

  async onEnviar() {
    //id cliente en el localstorage
    const id_cliente = JSON.parse(localStorage.getItem('id_cliente'));
    const direccion = await this.clientesService.getDetalleCliente(id_cliente);
    console.log(direccion.direccion);

    const resultado = await this.cartService.newPedido(JSON.parse(localStorage.getItem('carrito')));
    console.log(resultado);


    const newDisp = await this.productosService.updateDisp(JSON.parse(localStorage.getItem('carrito')));
    console.log(newDisp);

    localStorage.removeItem('producto');
    localStorage.removeItem('carrito');

    this.pedidoOK = true;
    setTimeout(() => {
      this.router.navigate(['/users/historico/' + id_cliente])


    }, 3000);
  };

}







