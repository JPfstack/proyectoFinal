import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';
import { CLIENTE } from '../../../Models/clienteModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeado: boolean;
  registrado: boolean;
  registro: FormGroup;
  cliente: CLIENTE;
  login: FormGroup;
  clienteId: number;

  constructor(private clientesService: ClientesService,
    private router: Router) {

    this.registro = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      password: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl()
    })

    this.registrado = false;
    this.logeado = false;

    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }


  async onRegistro() {
    this.registrado = true;
    console.log(this.registro.value);
    const respuesta = await this.clientesService.registroCliente(this.registro.value);
    console.log(respuesta);

    setTimeout(() => { this.router.navigate(['/users/datospersonales/' + respuesta.id_cliente]) }, 3000)

  }


  async onLogin() {
    this.logeado = true;
    const respuestaLogin = await this.clientesService.getByEmail(this.login.value);
    console.log(respuestaLogin.id_cliente)
    console.log(this.login.value);

    setTimeout(() => { this.router.navigate(['/users/datospersonales/' + respuestaLogin.id_cliente]) }, 3000)

  }




}

