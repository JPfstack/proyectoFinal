import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.css']
})
export class HistoricoPedidosComponent implements OnInit {

  star: boolean;
  starOff: boolean;
  starOn: boolean;

  constructor() {
    this.star = true;

  }

  ngOnInit(): void {
  }


  onStar() {
    this.star = !this.star;

  }
}

