import { Injectable } from '@angular/core';
import { PEDIDO } from '../Models/pedidoModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  baseUrl: string;
  urlPendientes: string;
  urlRealizados: string;
  pedidos: PEDIDO[];

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://ifruit.herokuapp.com/api/pedidos";
    this.urlPendientes = "https://ifruit.herokuapp.com/api/pedidos/pendientes";
    this.urlRealizados = "https://ifruit.herokuapp.com/api/pedidos/realizados";
  }

  //ESTA PETICION ME TRAE LOS PEDIDOS
  getAllPedidos(): Promise<PEDIDO[]> {
    return this.httpClient.get<PEDIDO[]>(this.baseUrl).toPromise();
  }

  //ESTA PETICION ME TRAE LOS PEDIDOS PENDIENTES
  getAllPedidosAdmin(): Promise<PEDIDO[]> {
    return this.httpClient.post<PEDIDO[]>(this.urlPendientes, PEDIDO).toPromise();
  }

  //PETICION PARA LOS PEDIDOS REALIZADOS
  getAllPedidoRealizado(): Promise<PEDIDO[]> {
    return this.httpClient.post<PEDIDO[]>(this.urlRealizados, PEDIDO).toPromise();
  }

  /*  getPedidoByEstado(pEstado): Promise<PEDIDO[]> {
     return new Promise((resolve, reject) => {
       resolve(this.pedidos.filter(PEDIDO => {
         return PEDIDO.estado === pEstado;
       }))
     })
   }*/

  changeToRealizado(pEstado): Promise<PEDIDO> {
    return this.httpClient.put<PEDIDO>(this.urlRealizados, pEstado).toPromise();
  }

} 
