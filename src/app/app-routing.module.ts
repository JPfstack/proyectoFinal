import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfruitComponent } from './componentes/ifruit/ifruit.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CartComponent } from './componentes/cart/cart.component';
import { DetalleErrorComponent } from './componentes/detalle-error/detalle-error.component';
import { DatosPersonalesComponent } from './componentes/usuariosChildren/datos-personales/datos-personales.component';
import { HistoricoPedidosComponent } from './componentes/usuariosChildren/historico-pedidos/historico-pedidos.component';
import { FavoritosComponent } from './componentes/usuariosChildren/favoritos/favoritos.component';
import { ProdComponent } from './componentes/prod/prod.component';
import { ProductosAdminComponent } from './componentes/productos-admin/productos-admin.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'ifruit' },
  { path: 'ifruit', component: IfruitComponent },
  {
    path: 'users', component: UsuariosComponent, children:

      [{ path: 'datospersonales', component: DatosPersonalesComponent },
      { path: 'historico', component: HistoricoPedidosComponent },
      { path: 'favoritos', component: FavoritosComponent }]
  },
  {
    path: 'admin', component: AdministradorComponent, children:
      [{ path: 'productosAdmin', component: ProductosAdminComponent },
      { path: 'pedidos', component: PedidosComponent }]
  },

  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'prod', component: ProdComponent },
  { path: '**', component: DetalleErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
