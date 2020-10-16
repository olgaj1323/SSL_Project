import { DecimalPipe } from '@angular/common'
import { Component, QueryList, ViewChildren } from '@angular/core'
import { Observable } from 'rxjs'

import { NgbdSortableHeader, SortEvent } from '../../../services/sortable.directive'
import { Country } from '../../../services/country'
import { CountryService } from '../../../services/country.service'

@Component({
  selector: 'app-proyecto-proceso',
  templateUrl: './proyecto-proceso.component.html',
  styleUrls: ['./proyecto-proceso.component.scss'],
  providers: [CountryService, DecimalPipe],
})
export class ProyectoProcesoComponent {
  selectedValue: string
  countries$: Observable<Country[]>
  total$: Observable<number>

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>

  constructor(public service: CountryService) {
    this.countries$ = service.countries$
    this.total$ = service.total$
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
}
