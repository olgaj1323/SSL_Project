// import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'

import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { ChartistModule } from 'ng-chartist'
import { InicioRouterModule } from './inicio-routing.module'
import { InicioComponent } from './inicio/inicio.component'
import { EstadisticasComponent } from './estadisticas/estadisticas.component'
import { FormsModule } from '@angular/forms'
import { CuentaComponent } from './cuenta/cuenta.component'
import { CarteraComponent } from './cartera/cartera.component'
import { ChartModule } from 'angular2-chartjs'
import { ChartsModule } from 'ng2-charts'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [InicioComponent, EstadisticasComponent, CuentaComponent, CarteraComponent],
  imports: [
    SharedModule,
    ChartistModule,
    InicioRouterModule,
    FormsModule,
    ChartModule,
    ChartsModule,
    NgbModule,
  ],
})
export class InicioModule {}
