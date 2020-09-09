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


  constructor(private clientesService: ClientesService) { }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    this.clienteId = await this.clientesService.getIdByToken(token)

    console.log(this.clienteId);
  }

}
