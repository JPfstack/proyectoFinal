import { PRODUCTO } from '../../../Models/productoModel';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  productos: PRODUCTO[];
  addProducto: FormGroup;
  newProd: boolean;
  editarProducto: FormGroup;
  producto: PRODUCTO;
  editar: boolean;
  anadirProd: boolean;
  btnAdd: boolean;

  constructor(
    private productosService: ProductosService,
    private router: Router) {

    this.newProd = true;
    this.editar = false;
    this.anadirProd = false;
    this.btnAdd = true;

    this.addProducto = new FormGroup({
      nombre: new FormControl(),
      precio: new FormControl(),
      disponibilidad: new FormControl(),
      est: new FormControl(),
      imagen: new FormControl(),
      descripcion: new FormControl
    });

    this.editarProducto = new FormGroup({
      nombre: new FormControl(),
      id_prod: new FormControl(),
      precio: new FormControl(),
      disponibilidad: new FormControl()

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
    this.newProd = false;
    this.anadirProd = true;
    this.btnAdd = false;
    this.btnAdd = false;

  }

  onVolver() {
    this.anadirProd = false;
    this.newProd = true;
    this.btnAdd = true;
  }

  onVolverEdit() {
    this.newProd = true;
    this.editar = false;
    this.btnAdd = true;
  }

  onEditarProducto(pProducto) {
    this.btnAdd = false;
    this.anadirProd = false;
    this.newProd = false;
    this.editar = true;

    this.editarProducto = new FormGroup({
      nombre: new FormControl(pProducto.nombre),
      precio: new FormControl(pProducto.precio),
      disponibilidad: new FormControl(parseFloat(pProducto.disponibilidad)),
      id_prod: new FormControl(pProducto.id_prod)
    });

  }

  async editProducto() {
    const respuesta = await this.productosService.updatePrecio(this.editarProducto.value);

    this.productosService.getAllProductos()
      .then(respuesta => {
        console.log(respuesta);
        this.productos = respuesta;
      })
      .catch(error => {
        console.log(error);

      });

    this.btnAdd = true;
    this.anadirProd = false;
    this.newProd = true;
    this.editar = false;



  }
}
