import { DecimalPipe } from '@angular/common'
import { Component, QueryList, ViewChildren } from '@angular/core'
import { Observable } from 'rxjs'

import { NgbdSortableHeader, SortEvent } from '../../../services/sortable.directive'
import { Country } from '../../../services/country'
import { CountryService } from '../../../services/country.service'

@Component({
  selector: 'app-proyecto-finalizado',
  templateUrl: './proyecto-finalizado.component.html',
  styleUrls: ['./proyecto-finalizado.component.scss'],
  providers: [CountryService, DecimalPipe],
})
export class ProyectoFinalizadoComponent {
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
