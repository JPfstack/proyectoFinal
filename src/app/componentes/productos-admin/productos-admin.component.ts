import { PRODUCTO } from '../../../Models/productoModel';

import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  productos: PRODUCTO[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {

    this.productosService.getAllProductos()
      .then(respuesta => {
        console.log(respuesta);
        this.productos = respuesta;
      })
      .catch(error => {
        console.log(error);

      });
  }

}
