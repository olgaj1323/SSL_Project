import { DecimalPipe } from '@angular/common'
import { Component, QueryList, ViewChildren } from '@angular/core'
import { Observable } from 'rxjs'

import { CountryService } from 'src/app/services/country.service'
import { Country } from 'src/app/services/country'
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive'
import { FormGroup } from '@angular/forms'
import c3 from 'c3'
import { truncate } from 'fs'

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss'],
  providers: [CountryService, DecimalPipe],
})
export class CarteraComponent {
  selectedValue: string
  countries$: Observable<Country[]>
  total$: Observable<number>
  detalleUsuarioForm: FormGroup
  isVisibleEditCompany: boolean
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>

  constructor(public service: CountryService) {
    this.countries$ = service.countries$
    this.total$ = service.total$
  }
  modalEditCompany() {
    this.isVisibleEditCompany = true
  }
  editCompanyClose() {
    this.isVisibleEditCompany = false
  }
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = ''
      }
    })

    this.service.sortColumn = column
    this.service.sortDirection = direction
  }

  ngAfterViewInit() {
    const colors = {
      complet: '#F79744',
      noComplete: '#F2F4F8',
    }
    const donutChartUno = c3.generate({
      bindto: '#donut-chart6',
      size: {
        height: 200,
        width: 260,
      },
      tooltip: {
        grouped: false,
      },
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: ['#21BA45', colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
    const donutChartDos = c3.generate({
      bindto: '#donut-chart7',
      size: {
        height: 200,
        width: 260,
      },
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: ['#A61C1C', colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
    const donutChartTres = c3.generate({
      bindto: '#donut-chart8',
      size: {
        height: 200,
        width: 260,
      },
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.complet, colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
  }
}
