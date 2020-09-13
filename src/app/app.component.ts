import { Component } from '@angular/core';
import { CLIENTE } from 'src/Models/clienteModel';
import { ClientesService } from './clientes.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registro: boolean;
  login: boolean;
  clienteToken: any;

  constructor(
    private clientesService: ClientesService,
    private router: Router) {

    this.login = false;
    this.registro = true;

  }
  ngOnInit() {

    const token = localStorage.getItem('token');
    this.clienteToken = this.clientesService.getIdByToken(token)
    console.log(this.clienteToken);
    if (this.clienteToken) {
      this.login = true;
      this.registro = false;

    }
  }

  Exit() {
    localStorage.removeItem('token');
    this.router.navigate(['/ifruit']);
    this.login = false;
    this.registro = true;
  }


}
