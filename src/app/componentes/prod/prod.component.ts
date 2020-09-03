import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { PRODUCTO } from '../../../Models/productoModel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  producto: PRODUCTO;
  productoId: number;
  favorite: boolean;

  constructor(private productosService: ProductosService,
    private activatedRoute: ActivatedRoute) {

    this.favorite = false;
  }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productoId = params.productoId
    })
    this.productosService.getProductoById(this.productoId)
      .then(respuesta => {
        this.producto = respuesta[0];
        console.log(respuesta[0].nombre);

      })
      .catch(error => console.log(error))

  }

  onFavorite() {
    this.favorite = !this.favorite;
  }

}
