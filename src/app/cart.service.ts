import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PEDIDO } from 'src/Models/pedidoModel';
import { PRODUCTO } from 'src/Models/productoModel';
import { CARRITO } from '../Models/cartModel';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  /*  arrProdCart: CARRITO[];
   prodLocalStorage: CARRITO; */
  carrito: any;
  newPeUrl: string;

  constructor(private httpClient: HttpClient) {
    this.newPeUrl = "http://localhost:3000/api/pedidos/nuevo";

    this.carrito = new Array();

    /*     this.arrProdCart = [
          new CARRITO(1, 1, 1, "../../../assets/images/manzana1.jpeg", 1.50, 10),
          new CARRITO(2, 3, 1, "../../../assets/images/manzana1.jpeg", 1.20, 5)
        ] */
  };


  addCarrito(productoId) {
    let arrStorage = [];
    let stringStorage = localStorage.getItem('producto');
    arrStorage = (stringStorage) ? JSON.parse(stringStorage) : [];
    arrStorage.push(productoId);

    localStorage.setItem('producto', JSON.stringify(arrStorage));
    return arrStorage;

  }

  newPedido(): Promise<PEDIDO[]> {
    return this.httpClient.post<PEDIDO[]>(this.newPeUrl, PEDIDO).toPromise();
  }

}

