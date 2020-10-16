import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component'
import { ProyectoProcesoComponent } from './proyecto-proceso/proyecto-proceso.component'

const routes: Routes = [
  {
    path: 'nuevoProyecto',
    component: NuevoProyectoComponent,
  },

  {
    path: 'proyectoProceso',
    component: ProyectoProcesoComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ProyectosRoutingModule {}
