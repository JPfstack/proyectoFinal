import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLIENTE } from 'src/Models/clienteModel';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  cliente: CLIENTE[];

  constructor() { }

  ngOnInit(): void {


  }
}
