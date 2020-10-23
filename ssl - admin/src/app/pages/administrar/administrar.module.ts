import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminEmpresaComponent } from './Empresa/admin-empresa.component'
import { AdminUsuarioComponent } from './usuarios/admin-usuario.component'
import { AdministrarRoutingModule } from './administrar-routing.module'
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component'
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component'
import { AddUserComponent } from './usuarios/add-user/add-user.component'
import { EditUserComponent } from './usuarios/edit-user/edit-user.component'
import { MassLoadUsersComponent } from './usuarios/mass-load-users/mass-load-users.component'
import { ResultUsersCreationComponent } from './usuarios/result-users-creation/result-users-creation.component'

@NgModule({
  declarations: [
    AdminEmpresaComponent,
    AdminUsuarioComponent,
    TerminosCondicionesComponent,
    ProyectosAdminComponent,
    AddUserComponent,
    EditUserComponent,
    MassLoadUsersComponent,
    ResultUsersCreationComponent,
  ],
  imports: [SharedModule, FormsModule, NgbModule, AdministrarRoutingModule],
})
export class AdministrarModule {}
