import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component'
import { EstadisticasComponent } from './estadisticas/estadisticas.component'
import { CarteraComponent } from './cartera/cartera.component'
import { CuentaComponent } from './cuenta/cuenta.component'
import { AuthGuard } from 'src/app/components/cleanui/layout/Guard/auth.guard'

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'inicio' },
    canActivate: [AuthGuard],
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    data: { title: 'estadisticas' },
    canActivate: [AuthGuard],
  },
  {
    path: 'cartera',
    component: CarteraComponent,
    data: { title: 'cartera' },
    canActivate: [AuthGuard],
  },
  {
    path: 'cuenta',
    component: CuentaComponent,
    data: { title: 'cuenta' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class InicioRouterModule {}
