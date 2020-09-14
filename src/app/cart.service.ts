import { Injectable } from '@angular/core';
import { PRODUCTO } from 'src/Models/productoModel';
import { CARRITO } from '../Models/cartModel';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  /*  arrProdCart: CARRITO[];
   prodLocalStorage: CARRITO; */
  carrito: any;


  constructor() {
    this.carrito = new Array();

    /*     this.arrProdCart = [
          new CARRITO(1, 1, 1, "../../../assets/images/manzana1.jpeg", 1.50, 10),
          new CARRITO(2, 3, 1, "../../../assets/images/manzana1.jpeg", 1.20, 5)
        ] */
  };


  addCarrito(productoId) {
    var arrStorage = [];
    let stringStorage = localStorage.getItem('producto');
    arrStorage = (stringStorage) ? JSON.parse(stringStorage) : [];
    arrStorage.push(productoId);

    localStorage.setItem('producto', JSON.stringify(arrStorage));
    return arrStorage;

  }
  /*  getAllProdCart() {
     if (this.prodLocalStorage == null) {
       return this.arrProdCart;
     } else {
       this.arrProdCart.unshift(this.prodLocalStorage);
       return this.arrProdCart;
     }
   }
 
   getLocalStorage() {
     this.prodLocalStorage = JSON.parse(localStorage.getItem('prodLocalStorage'));
     console.log('HOLA', this.prodLocalStorage);
 
   } */
}
