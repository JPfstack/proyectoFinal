import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { PRODUCTO } from '../../../Models/productoModel';


@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

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
      })

  }

}
