import { PRODUCTO } from '../../../Models/productoModel';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  productos: PRODUCTO[];
  addProducto: FormGroup;
  newProd: boolean;

  constructor(private productosService: ProductosService) {

    this.newProd = true;

    this.addProducto = new FormGroup({
      nombre: new FormControl(),
      precio: new FormControl(),
      disponibilidad: new FormControl(),
      est: new FormControl(),
      imagen: new FormControl(),
      descripcion: new FormControl
    });
  }

  ngOnInit(): void {

    this.productosService.getAllProductos()
      .then(respuesta => {
        console.log(respuesta);
        this.productos = respuesta;
      })
      .catch(error => {
        console.log(error);

      });
  };

  async onProducto() {
    await this.productosService.addNewProducto(this.addProducto.value);
    console.log(this.addProducto.value);
    this.ngOnInit();

  }
  onNewProducto() {
    this.newProd = !this.newProd;

  }
}
