import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from 'src/app/shared.module'
import { WidgetsComponentsModule } from 'src/app/components/kit/widgets/widgets-components.module'

import { TopbarComponent } from './Topbar/topbar.component'
import { TopbarUserMenuComponent } from './Topbar/UserMenu/user-menu.component'
import { MenuLeftComponent } from './Menu/MenuLeft/menu-left.component'
import { FooterComponent } from './Footer/footer.component'
import { BreadcrumbsComponent } from './Breadcrumbs/breadcrumbs.component'
import { ToogleMenuComponent } from './Topbar/toogle-menu/toogle-menu.component'

const COMPONENTS = [
  TopbarComponent,
  ToogleMenuComponent,
  TopbarUserMenuComponent,

  MenuLeftComponent,

  FooterComponent,
  BreadcrumbsComponent,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    WidgetsComponentsModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
