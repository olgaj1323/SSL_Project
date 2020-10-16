import { NgModule } from '@angular/core'
import { ProyectoFinalizadoComponent } from './proyecto-finalizado/proyecto-finalizado.component'
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component'
import { ProyectoProcesoComponent } from './proyecto-proceso/proyecto-proceso.component'
import { SharedModule } from 'src/app/shared.module'
import { ProyectosRoutingModule } from './proyectos-routing.module'
import { FormsModule } from '@angular/forms'
import { NgbdSortableHeader } from '../../services/sortable.directive'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PdfViewerModule } from 'ng2-pdf-viewer'

@NgModule({
  declarations: [ProyectoFinalizadoComponent, NuevoProyectoComponent, ProyectoProcesoComponent],
  imports: [SharedModule, ProyectosRoutingModule, FormsModule, NgbModule, PdfViewerModule],
})
export class ProyectosModule {}
