import { Component, OnInit } from '@angular/core';
import { BarRatingModule } from "ngx-bar-rating";


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


  constructor() {
    this.favorite = true;
    this.fondo = {
      backgroundColor: "",
    }


  }



  ngOnInit(): void {
  }



  onFavorite() {
    if (!this.fondo.backgroundColor) {
      this.fondo.backgroundColor = 'darkgoldenrod'
    } else {
      this.fondo.backgroundColor = null;
    }
  }
}
