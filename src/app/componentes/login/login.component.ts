import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';
import { CLIENTE } from '../../../Models/clienteModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeRegistro: boolean;
  error: boolean;
  logeado: boolean;
  registrado: boolean;
  registro: FormGroup;
  cliente: CLIENTE;
  login: FormGroup;
  clienteId: number;

  constructor(private clientesService: ClientesService,
    private router: Router) {

    this.registro = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      password: new FormControl(),
      direccion: new FormControl("", [Validators.required]),
      telefono: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email])
    })
    this.mensajeRegistro = false;
    this.registrado = false;
    this.logeado = false;
    this.error = false;

    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }


  async onRegistro() {

    this.registrado = true;

    const respuesta = await this.clientesService.registroCliente(this.registro.value);

    setTimeout(() => { this.mensajeRegistro = true, this.registrado = false }, 4000);
  }


  async onLogin() {
    const respuestaLogin = await this.clientesService.getByEmail(this.login.value);
    if (respuestaLogin['success'] && respuestaLogin['cliente'].email === 'admin@gmail.com') {
      this.logeado = true;
      localStorage.setItem('token', respuestaLogin['token']);
      this.clientesService.clienteLogin(respuestaLogin['cliente']);

      return setTimeout(() => {
        this.router.navigate(['/admin/pedidos'])

      }, 3000);

    }


    if (respuestaLogin['success']) {

      const urlCliente = respuestaLogin['cliente'].id_cliente;
      console.log(respuestaLogin['token']);
      this.logeado = true;
      localStorage.setItem('token', respuestaLogin['token']);

      //id del cliente disponible en el localstorage
      localStorage.setItem('id_cliente', respuestaLogin['cliente'].id_cliente);

      this.clientesService.clienteLogin(respuestaLogin['cliente']);

      setTimeout(function () { this.router.navigate(['/users/datospersonales/' + urlCliente]) }.bind(this), 3000);

    } else {
      this.error = true;
      setTimeout(() => { this.ngOnInit(), this.error = false }, 3000)

    }
  }
}







