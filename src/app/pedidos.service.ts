import { Injectable } from '@angular/core';
import { PEDIDO } from '../Models/pedidoModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/adminpedidos";
  }

  //ESTA PETICION ME TRAE LOS PEDIDOS
  getAllPedidos(): Promise<PEDIDO[]> {
    return this.httpClient.get<PEDIDO[]>(this.baseUrl).toPromise();
  }

  //ESTA PETICION ME TRAE LOS PEDIDOS PENDIENTES
  getAllPedidosAdmin(): Promise<PEDIDO[]> {
    return this.httpClient.get<PEDIDO[]>(this.baseUrl).toPromise();
  }
}
