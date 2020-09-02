import { Injectable } from '@angular/core';
import { CLIENTE } from '../Models/clienteModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;
  detalleUrl: string;
  newUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/admin";
    this.detalleUrl = "http://localhost:3000/api/clientes/11"; //la url esta incorrecta, hay que cambiarla
    this.newUrl = "http://localhost:3000/api/clientes";
  }

  getAllClientes(): Promise<CLIENTE[]> {
    return this.httpClient.get<CLIENTE[]>(this.baseUrl).toPromise();
  }

  getDetalleCliente(): Promise<CLIENTE> {
    return this.httpClient.get<CLIENTE>(this.detalleUrl).toPromise();
  }

  registroCliente(formvalues): Promise<any> {
    return this.httpClient.post<any>(this.newUrl, formvalues).toPromise();
  }
}
