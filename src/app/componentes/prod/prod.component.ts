import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { PRODUCTO } from '../../../Models/productoModel';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { CartService } from 'src/app/cart.service';



@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  clienteToken: any;
  producto: PRODUCTO;
  productoId: number;
  favorite: boolean;
  productoSelect: any;
  prodNewCart: any;

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService,
    private cartService: CartService) {

    this.favorite = false;
    this.prodNewCart = new Array()
  }


  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productoId = params.productoId
    })
    this.productosService.getProductoById(this.productoId)
      .then(respuesta => {
        this.producto = respuesta[0];
      })
      .catch(error => console.log(error));


    const token = localStorage.getItem('token');
    this.clienteToken = await this.clientesService.getIdByToken(token)

    console.log(this.clienteToken.clienteId);
  }

  async onFavorite() {
    this.favorite = !this.favorite;
    const producto = this.productoId;
    const cliente = this.clienteToken.clienteId;
    console.log(cliente, producto);

    const respuesta = await this.productosService.insertFavorito(cliente, producto)
    console.log(respuesta);
  }

  async onComprar(pAnadirCarrito, pRuta) {
    this.prodNewCart = pAnadirCarrito;
    let prodEnviado = this.productoSelect;

    /*  if (prodEnviado) {
       this.prodNewCart = true;
     } else {
       localStorage.setItem('prodNewCart', JSON.stringify(this.prodNewCart));
       this.cartService.getAllProdCart();
       setTimeout(() => {
         this.productoSelect
       }, 5000)
     } */







    /* this.productoSelect = !this.productoSelect;
    const prodSelect = this.productoId;
    const pedidoNew = this.clienteToken.clienteId;
    console.log(prodSelect, pedidoNew);


    await this.productosService.anadirCarrito(prodSelect); */
  }
}
