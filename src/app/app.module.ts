import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarRatingModule } from "ngx-bar-rating";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfruitComponent } from './componentes/ifruit/ifruit.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CartComponent } from './componentes/cart/cart.component';
import { DetalleErrorComponent } from './componentes/detalle-error/detalle-error.component';
import { FavoritosComponent } from './componentes/usuariosChildren/favoritos/favoritos.component';
import { DatosPersonalesComponent } from './componentes/usuariosChildren/datos-personales/datos-personales.component';
import { HistoricoPedidosComponent } from './componentes/usuariosChildren/historico-pedidos/historico-pedidos.component';
import { ProdComponent } from './componentes/prod/prod.component';


@NgModule({
  declarations: [
    AppComponent,
    IfruitComponent,
    UsuariosComponent,
    AdministradorComponent,
    LoginComponent,
    ProductosComponent,
    CartComponent,
    DetalleErrorComponent,
    FavoritosComponent,
    DatosPersonalesComponent,
    HistoricoPedidosComponent,
    ProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
