import { Injectable } from '@angular/core';
import { PRODUCTO } from '../Models/productoModel';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/productos";
  }

  getAllProductos(): Promise<PRODUCTO[]> {
    return this.httpClient.get<PRODUCTO[]>(this.baseUrl).toPromise();
  }

  getProductoById(productoId): Promise<PRODUCTO> {
    return this.httpClient.get<PRODUCTO>(`${this.baseUrl}/${productoId}`).toPromise();
  }
}
