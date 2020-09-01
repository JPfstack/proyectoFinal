import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { PRODUCTO } from '../../../Models/productoModel';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  rate: number;
  favorite: boolean;
  color: string;
  fondo: any;

  productos: PRODUCTO[];

  constructor(private productosService: ProductosService) {
    this.favorite = true;
    this.fondo = {
      backgroundColor: "",
    }
  }



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



  onFavorite() {
    if (!this.fondo.backgroundColor) {
      this.fondo.backgroundColor = 'darkgoldenrod'
    } else {
      this.fondo.backgroundColor = null;
    }
  }
}
