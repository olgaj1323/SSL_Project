import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminEmpresaComponent } from './Empresa/admin-empresa.component'
import { AdminUsuarioComponent } from './usuarios/admin-usuario.component'
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component'
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component'

const routes: Routes = [
  {
    path: 'adminEmpresa',
    component: AdminEmpresaComponent,
    data: { title: 'adminEmpresa' },
  },
  {
    path: 'adminUsuario',
    component: AdminUsuarioComponent,
    data: { title: 'adminUsuario' },
  },
  {
    path: 'adminTerminos',
    component: TerminosCondicionesComponent,
    data: { title: 'adminTerminos' },
  },
  {
    path: 'adminProyectos',
    component: ProyectosAdminComponent,
    data: { title: 'adminProyectos' },
  },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AdministrarRoutingModule {}
