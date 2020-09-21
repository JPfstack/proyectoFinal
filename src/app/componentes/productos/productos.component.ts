import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { PRODUCTO } from '../../../Models/productoModel';
import { ClientesService } from 'src/app/clientes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: PRODUCTO[];
  clienteToken: any;
  todosProductos: PRODUCTO[];
  productoId: number;
  disp: number;
  texto: boolean;
  ofertas: boolean;

  constructor(
    private productosService: ProductosService,
    private clientesService: ClientesService,
    private cartService: CartService) {

    this.texto = false;
    this.ofertas = false;


  }
  async ngOnInit() {

    this.productos = await this.productosService.getAllProductos();
    console.log(this.productos);
    let disp;
    for (let prod of this.productos) {
      disp = parseFloat(prod.disponibilidad);
      console.log(disp);

    }

    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)

    console.log(this.clienteToken.clienteId);

  }



  async onEst($event) {
    if ($event.target.value === 'estaciones') {
      this.productos = await this.productosService.getAllProductos();
      console.log(this.todosProductos);
    } else {
      this.productos = (await this.productosService.getAllProductos()).filter(PRODUCTO => PRODUCTO.est == $event.target.value);
      console.log(this.todosProductos);
    }

  }

  async onOferta($event) {
    if ($event.target.value === 'todas') {
      this.productos = await this.productosService.getAllProductos();
      this.texto = false;
      this.ofertas = false;
    }
    else if ($event.target.value === 'ofertas') {
      this.productos = (await this.productosService.getAllProductos()).filter(PRODUCTO => parseInt(PRODUCTO.disponibilidad) < 10);
      this.texto = false;
      this.ofertas = true;
    } else if ($event.target.value === 'otoño-invierno') {
      this.productos = (await this.productosService.getAllProductos()).filter(PRODUCTO => PRODUCTO.est == $event.target.value);
      this.texto = true;
      this.ofertas = false;
    }
  }
  /* onCarrito() {
    console.log(this.clienteToken.clienteId, this.productoId);

    const resultado = this.cartService.addCarrito(this.productoId);
    console.log(resultado);
  } */

}
