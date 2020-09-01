import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  registro: FormGroup;

  constructor(private clientesService: ClientesService) {

    this.registro = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl()
    })
  }

  ngOnInit(): void {
  }



  async onSubmit() {
    console.log(this.registro.value);
    const respuesta = await this.clientesService.registroCliente(this.registro.value);
    if (respuesta['sucess']) {
      console.log(respuesta['sucess'])
    }
    else {
      console.log(respuesta['error']);
    }



  }
}
