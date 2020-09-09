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

    setTimeout(() => { this.router.navigate(['/users/datospersonales/' + respuesta.id_cliente]) }, 3000)
  }


  async onLogin() {
    const respuestaLogin = await this.clientesService.getByEmail(this.login.value);
    const urlCliente = respuestaLogin['cliente'].id_cliente;
    console.log(respuestaLogin['token']);

    if (respuestaLogin['success']) {
      this.logeado = true;
      localStorage.setItem('token', respuestaLogin['token']);
      setTimeout(() => { this.router.navigate(['/users/datospersonales/' + urlCliente]) }, 3000);
    } else {
      this.error = true;
      setTimeout(() => { this.router.navigate(['/login']), this.error = false }, 3000)

    }
  }
}







