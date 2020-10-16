import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component'
import { EstadisticasComponent } from './estadisticas/estadisticas.component'
import { CarteraComponent } from './cartera/cartera.component'
import { CuentaComponent } from './cuenta/cuenta.component'
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component'

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'inicio' },
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    data: { title: 'estadisticas' },
  },
  {
    path: 'cartera',
    component: CarteraComponent,
    data: { title: 'cartera' },
  },
  {
    path: 'cuenta',
    component: CuentaComponent,
    data: { title: 'cuenta' },
  },
  {
    path: 'proyectosAdmin',
    component: ProyectosAdminComponent,
    data: { title: 'proyectosAdmin' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class InicioRouterModule {}
