import { LoginComponent } from './views/login/login.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeComponent } from './views/acerca-de/acerca-de.component';
import { ListadoComponent } from './views/listado/listado.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'acercaDe', component: AcercaDeComponent},

  {path: '', redirectTo: '/listado', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
