import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { QuillModule } from 'ngx-quill'

// acl
import { ACLComponent } from 'src/app/components/cleanui/layout/ACL/acl.component'

// antd components module
import { AntdModule } from 'src/app/antd.module'
import { InicioComponent } from './pages/Principal/inicio/inicio.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NgbdSortableHeader } from './services/sortable.directive'

const MODULES = [CommonModule, RouterModule, AntdModule, TranslateModule, ReactiveFormsModule]

@NgModule({
  imports: [...MODULES, QuillModule.forRoot()],
  declarations: [ACLComponent, NgbdSortableHeader],
  exports: [...MODULES, QuillModule],
})
export class SharedModule {}
