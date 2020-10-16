import { Component, OnInit, ViewChildren, QueryList } from '@angular/core'
import { Observable } from 'rxjs'
import { Country } from 'src/app/services/country'
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive'
import { CountryService } from 'src/app/services/country.service'
import { DecimalPipe } from '@angular/common'

@Component({
  selector: 'app-proyectos-admin',
  templateUrl: './proyectos-admin.component.html',
  styleUrls: ['./proyectos-admin.component.scss'],
  providers: [CountryService, DecimalPipe],
})
export class ProyectosAdminComponent implements OnInit {
  ngOnInit() {}
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
