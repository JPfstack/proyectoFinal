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
  loginUrl: string;
  cliente: CLIENTE;
  id_cliente: number;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/admin";
    this.detalleUrl = "http://localhost:3000/api/clientes"; //la url esta incorrecta, hay que cambiarla
    this.newUrl = "http://localhost:3000/api/clientes";
    this.loginUrl = "http://localhost:3000/api/clientes/login";


  }

  getAllClientes(): Promise<CLIENTE[]> {
    return this.httpClient.get<CLIENTE[]>(this.baseUrl).toPromise();
  }

  getDetalleCliente(pClienteId): Promise<CLIENTE> {
    return this.httpClient.get<CLIENTE>(`${this.detalleUrl}/${pClienteId}`).toPromise();
  }

  registroCliente(formvalues): Promise<any> {
    return this.httpClient.post<any>(this.newUrl, formvalues).toPromise();
  }

  getByEmail(formvalues): Promise<CLIENTE> {
    return this.httpClient.post<CLIENTE>(this.loginUrl, formvalues).toPromise();
  }
}
