import { Component, OnInit, ViewChildren, QueryList } from '@angular/core'
import { Observable } from 'rxjs'
import { Country } from 'src/app/services/country'
import { NgbdSortableHeader, SortEvent } from 'src/app/services/sortable.directive'
import { CountryService } from 'src/app/services/country.service'
import { DecimalPipe } from '@angular/common'
import {
  FormControl,
  FormGroup,
  FormControlName,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms'

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.scss'],
  providers: [CountryService, DecimalPipe],
})
export class AdminUsuarioComponent {
  formAddUsers: FormGroup //Modal Add User
  selectedValue: string
  countries$: Observable<Country[]>
  total$: Observable<number>
  isVisibleEditUser: boolean
  isVisibleAddUser: boolean
  dynamicArray: Array<any> = []
  newDynamic: any = {}
  isVisibleCargaMasiva: boolean

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>
  isResultadoCarga: boolean

  constructor(public service: CountryService, private formBuilder: FormBuilder) {
    this.countries$ = service.countries$
    this.total$ = service.total$
  }
  ngOnInit(): void {
    this.newDynamic = { cedula: '', name: '', rol: '', email: '', cell: '', phone: '' }
    this.dynamicArray.push(this.newDynamic)
  }

  addRow() {
    this.newDynamic = { cedula: '', name: '', rol: '', email: '', cell: '', phone: '' }
    this.dynamicArray.push(this.newDynamic)
    console.log('New row added successfully', 'New Row')
    console.log(this.dynamicArray)
    return true
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      console.log("Can't delete the row when there is only one row", 'Warning')
      return false
    } else {
      this.dynamicArray.splice(index, 1)
      console.log('Row deleted successfully', 'Delete row')
      return true
    }
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

  editUser() {
    this.isVisibleEditUser = true
  }
  editUserClose() {
    this.isVisibleEditUser = false
  }
  contactos() {
    this.isVisibleAddUser = true
  }
  cargaMasiva() {
    this.isVisibleCargaMasiva = true
  }
  addUserClose() {
    this.isVisibleAddUser = false
  }
  cargaMasivaClose() {
    this.isVisibleCargaMasiva = false
  }
  resultadoCarga() {
    this.isResultadoCarga = true
    this.isVisibleCargaMasiva = false
  }
  resultadoCargaClose() {
    this.isResultadoCarga = false
  }
  postUsers() {}
}
