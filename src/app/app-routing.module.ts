import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfruitComponent } from './componentes/ifruit/ifruit.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CartComponent } from './componentes/cart/cart.component';
import { DetalleErrorComponent } from './componentes/detalle-error/detalle-error.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'ifruit' },
  { path: 'ifruit', component: IfruitComponent },
  { path: 'users', component: UsuariosComponent },
  { path: 'admin', component: AdministradorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CartComponent },
  { path: '**', component: DetalleErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
