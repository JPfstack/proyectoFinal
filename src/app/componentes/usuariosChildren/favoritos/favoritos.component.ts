import { Component, OnInit } from '@angular/core';
import { CLIENTE } from './../../../../Models/clienteModel';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../clientes.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  clienteId: number;
  cliente: CLIENTE;


  constructor(private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clienteId = params.clienteId
      console.log(this.clienteId);

    })
    this.clientesService.getDetalleCliente(this.clienteId)
      .then(respuesta => {
        this.cliente = respuesta;
        console.log(respuesta);
      })
      .catch(error => {
        console.log(error);
      })


  }

}
