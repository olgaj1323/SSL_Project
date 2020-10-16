import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminEmpresaComponent } from './Empresa/admin-empresa.component'
import { AdminUsuarioComponent } from './usuarios/admin-usuario.component'
import { AdministrarRoutingModule } from './administrar-routing.module'
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component'

@NgModule({
  declarations: [AdminEmpresaComponent, AdminUsuarioComponent, TerminosCondicionesComponent],
  imports: [SharedModule, FormsModule, NgbModule, AdministrarRoutingModule],
})
export class AdministrarModule {}
