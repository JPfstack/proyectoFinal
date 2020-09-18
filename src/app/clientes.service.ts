import { Injectable } from '@angular/core';
import { CLIENTE } from '../Models/clienteModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes$ = new Subject<CLIENTE>();

  pedidosUrl: string;
  tokenUrl: string;
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
    this.tokenUrl = "http://localhost:3000/api/clientes/token";
    this.pedidosUrl = "http://localhost:3000/api/clientes/pedidos";



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

  getPedidosByIdCliente(pCliente): Promise<any> {
    return this.httpClient.get<any>(`${this.pedidosUrl}/${pCliente}`).toPromise();
  }

  getIdByToken(token): any {
    let decode = jwt_decode(token);
    return decode
  }

  edicionCliente(formvalues): Promise<any> {
    console.log(formvalues);

    return this.httpClient.put<any>(this.detalleUrl, formvalues).toPromise();
  }

  clienteLogin(pCliente) {
    this.clientes$.next(pCliente);
  }

  getClientes$(): Observable<CLIENTE> {
    return this.clientes$.asObservable();
  }


}
