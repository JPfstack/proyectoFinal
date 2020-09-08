import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CLIENTE } from 'src/Models/clienteModel';
import { ClientesService } from 'src/app/clientes.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  clienteLogin: CLIENTE;


  constructor(
  ) {


  }

  ngOnInit(): void {

    /* const idCliente = (localStorage.getItem('token')) */
    console.log(this.clienteLogin);

  }


}

