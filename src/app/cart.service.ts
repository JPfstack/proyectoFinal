import { Injectable } from '@angular/core';
import { CARRITO } from '../Models/cartModel';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  arrProdCart: CARRITO[];
  prodLocalStorage: CARRITO;


  constructor() {

    this.arrProdCart = [
      new CARRITO(1, 1, 1, "../../../assets/images/manzana1.jpeg", 1.50, 10),
      new CARRITO(2, 3, 1, "../../../assets/images/manzana1.jpeg", 1.20, 5)
    ]
  };

  getAllProdCart() {
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

  }
}
