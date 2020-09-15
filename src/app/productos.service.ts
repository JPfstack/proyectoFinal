import { Injectable } from '@angular/core';
import { PRODUCTO } from '../Models/productoModel';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;
  favUrl: string;
  cartUrl: string;
  idFavUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/productos";
    this.favUrl = "http://localhost:3000/api/productos/favoritos";
    this.cartUrl = "http://localhost:3000/api/productos/anadir";
    this.idFavUrl = "http://localhost:3000/api/productos/favoritos/id"

  };

  getAllProductos(): Promise<PRODUCTO[]> {
    return this.httpClient.get<PRODUCTO[]>(this.baseUrl).toPromise();
  };

  getProductoById(productoId): Promise<PRODUCTO> {
    return this.httpClient.get<PRODUCTO>(`${this.baseUrl}/${productoId}`).toPromise();
  };

  insertFavorito(fk_id_cliente, fk_id_producto): Promise<any> {
    return this.httpClient.post<any>(this.favUrl, { fk_id_cliente, fk_id_producto }).toPromise();
  };

  getFavoritos(fk_id_cliente): Promise<any> {
    return this.httpClient.get<any>(`${this.favUrl}/${fk_id_cliente}`).toPromise();
  }

  anadirCarrito(fk_id_producto): Promise<any> {
    console.log(fk_id_producto);

    return this.httpClient.post<any>(this.cartUrl, { fk_id_producto }).toPromise();
  }

  getIdFav(fk_id_cliente, fk_id_producto): Promise<any> {
    return this.httpClient.post<any>(this.idFavUrl, { fk_id_cliente, fk_id_producto }).toPromise();
  }

  removeFav(pId): Promise<any> {
    console.log(pId);

    return this.httpClient.delete<any>(`${this.idFavUrl}/${pId}`).toPromise();
  }

  addNewProducto(formvalues): Promise<PRODUCTO> {
    return this.httpClient.post<PRODUCTO>(this.baseUrl, formvalues).toPromise();
  }
}
