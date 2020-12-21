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
  updateUrl: string;
  updPrecio: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://ifruit.herokuapp.com/api/productos";
    this.favUrl = "https://ifruit.herokuapp.com/api/productos/favoritos";
    this.cartUrl = "https://ifruit.herokuapp.com/api/productos/anadir";
    this.idFavUrl = "https://ifruit.herokuapp.com/api/productos/favoritos/id"
    this.updateUrl = "https://ifruit.herokuapp.com/api/productos/edit"
    this.updPrecio = "https://ifruit.herokuapp.com/api/productos/editprecio"

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

  updateDisp(pCarrito): Promise<any> {
    return this.httpClient.put<any>(this.updateUrl, pCarrito).toPromise();
  }

  updatePrecio(formvalues): Promise<any> {
    return this.httpClient.put<any>(this.updPrecio, formvalues).toPromise();
  }
}
