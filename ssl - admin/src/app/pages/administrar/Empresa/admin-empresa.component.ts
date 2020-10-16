import { Component, OnInit, ViewChildren, QueryList } from '@angular/core'
import { Observable } from 'rxjs'
import { Country } from 'src/app/services/country'
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive'
import { CountryService } from 'src/app/services/country.service'
import { DecimalPipe } from '@angular/common'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-admin-empresa',
  templateUrl: './admin-empresa.component.html',
  styleUrls: ['./admin-empresa.component.scss'],

  providers: [CountryService, DecimalPipe],
})
export class AdminEmpresaComponent {
  isVisibleEditCompany: boolean
  validateForm!: FormGroup
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
  ActualizarForm() {}

  editCompanyClose() {
    this.isVisibleEditCompany = false
  }
  modalEditCompany() {
    this.isVisibleEditCompany = true
  }
}
