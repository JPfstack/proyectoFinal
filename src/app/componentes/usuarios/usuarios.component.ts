import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CLIENTE } from 'src/Models/clienteModel';
import { ClientesService } from 'src/app/clientes.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  clienteToken: any;


  constructor(
    private clientesService: ClientesService) {


  }

  ngOnInit() {

    const token = localStorage.getItem('token');
    this.clienteToken = this.clientesService.getIdByToken(token)
    console.log(this.clienteToken);


  }


}



