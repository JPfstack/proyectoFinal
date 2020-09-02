import { PRODUCTO } from '../../../Models/productoModel';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  productos: PRODUCTO[];

  constructor() { }

  ngOnInit(): void {
  }

}
