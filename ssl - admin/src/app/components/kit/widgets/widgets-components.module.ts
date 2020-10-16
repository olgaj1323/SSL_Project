import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { ChartistModule } from 'ng-chartist'
import { ChartModule } from 'angular2-chartjs'
import { UsMapModule } from 'angular-us-map'

import { CuiChart1Component } from './Charts/1/1.component'
import { CuiChart2Component } from './Charts/2/2.component'
import { CuiChart3Component } from './Charts/3/3.component'
import { CuiChart4Component } from './Charts/4/4.component'
import { CuiChart4v1Component } from './Charts/4v1/4v1.component'
import { CuiChart4v2Component } from './Charts/4v2/4v2.component'
import { CuiChart4v3Component } from './Charts/4v3/4v3.component'
import { CuiChart5Component } from './Charts/5/5.component'
import { CuiChart6Component } from './Charts/6/6.component'
import { CuiChart7Component } from './Charts/7/7.component'
import { CuiChart8Component } from './Charts/8/8.component'
import { CuiChart9Component } from './Charts/9/9.component'
import { CuiChart10Component } from './Charts/10/10.component'
import { CuiChart11Component } from './Charts/11/11.component'
import { CuiChart11v1Component } from './Charts/11v1/11v1.component'
import { CuiChart11v2Component } from './Charts/11v2/11v2.component'
import { CuiChart12Component } from './Charts/12/12.component'
import { CuiChart12v1Component } from './Charts/12v1/12v1.component'
import { CuiChart13Component } from './Charts/13/13.component'
import { CuiChart13v1Component } from './Charts/13v1/13v1.component'
import { CuiChart13v2Component } from './Charts/13v2/13v2.component'

import { CuiTable1Component } from './Tables/1/1.component'
import { CuiTable2Component } from './Tables/2/2.component'
import { CuiTable3Component } from './Tables/3/3.component'
import { CuiTable4Component } from './Tables/4/4.component'
import { CuiTable5Component } from './Tables/5/5.component'
import { CuiTable6Component } from './Tables/6/6.component'
import { CuiTable7Component } from './Tables/7/7.component'
import { CuiTable8Component } from './Tables/8/8.component'

const COMPONENTS = [
  CuiChart1Component,
  CuiChart2Component,
  CuiChart3Component,
  CuiChart4Component,
  CuiChart4v1Component,
  CuiChart4v2Component,
  CuiChart4v3Component,
  CuiChart5Component,
  CuiChart6Component,
  CuiChart7Component,
  CuiChart8Component,
  CuiChart9Component,
  CuiChart10Component,
  CuiChart11Component,
  CuiChart11v1Component,
  CuiChart11v2Component,
  CuiChart12Component,
  CuiChart12v1Component,
  CuiChart13Component,
  CuiChart13v1Component,
  CuiChart13v2Component,
  CuiTable1Component,
  CuiTable2Component,
  CuiTable3Component,
  CuiTable4Component,
  CuiTable5Component,
  CuiTable6Component,
  CuiTable7Component,
  CuiTable8Component,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ChartistModule,
    ChartModule,
    CommonModule,
    UsMapModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class WidgetsComponentsModule {}
