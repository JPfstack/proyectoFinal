import { Component } from '@angular/core';
import { CLIENTE } from 'src/Models/clienteModel';
import { ClientesService } from './clientes.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes$: Observable<CLIENTE>;

  salir: boolean;
  admin: boolean;
  registro: boolean;
  login: boolean;
  clienteToken: any;
  detalleCliente: CLIENTE;

  constructor(
    public clientesService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.login = false;
    this.registro = true;
    this.admin = false;
    this.salir = false;

  }
  async ngOnInit() {

    this.clientesService.getClientes$().subscribe(async clientes => {

      const token = localStorage.getItem('token');
      this.clienteToken = this.clientesService.getIdByToken(token);

      if (this.clienteToken) {
        this.salir = true;
        this.login = true;
        this.registro = false;
        this.detalleCliente = await this.clientesService.getDetalleCliente(this.clienteToken.clienteId);
        console.log(this.detalleCliente);

        if (this.detalleCliente.email === 'admin@gmail.com') {
          this.login = false;
          this.admin = true;
        }

      };
    })



  }

  Exit() {
    localStorage.removeItem('token');
    localStorage.removeItem('producto');
    localStorage.removeItem('id_cliente');
    setTimeout(() => {
      this.router.navigate(['/ifruit'])
    }, 2000);

    this.login = false;
    this.registro = true;
    this.salir = false;
    this.admin = false;


  }


}
