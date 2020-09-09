import { Injectable } from '@angular/core';
import { PRODUCTO } from '../Models/productoModel';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;
  favUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/productos";
    this.favUrl = "http://localhost:3000/api/productos/favoritos";
  }

  getAllProductos(): Promise<PRODUCTO[]> {
    return this.httpClient.get<PRODUCTO[]>(this.baseUrl).toPromise();
  }

  getProductoById(productoId): Promise<PRODUCTO> {
    return this.httpClient.get<PRODUCTO>(`${this.baseUrl}/${productoId}`).toPromise();
  }

  insertFavorito(clienteId, productoId): Promise<any> {

    console.log(clienteId);
    console.log(productoId);


    return this.httpClient.post<any>(this.favUrl, { clienteId, productoId }).toPromise();


  }
}
