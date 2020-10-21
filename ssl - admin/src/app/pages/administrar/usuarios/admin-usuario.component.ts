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

/*Imports del store*/
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { getEmployeess } from 'src/app/store/employees/reducers'

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

  loading: boolean = false
  people: Array<any> = []
  filters: Array<string> = []

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>
  isResultadoCarga: boolean

  constructor(
    public service: CountryService,
    private formBuilder: FormBuilder,
    private store: Store<any>,
  ) {
    this.countries$ = service.countries$
    this.total$ = service.total$

    //Escuchar los datos de los empleados en el store
    this.store.pipe(select(Reducers.getEmployeess)).subscribe(state => {
      console.log('State desde admin', state)
      this.loading = state.loading
      this.people = state.people
      this.filters = state.filters
    })
  }
  ngOnInit(): void {
    this.newDynamic = { cedula: '', name: '', rol: '', email: '', cell: '', phone: '' }
    this.dynamicArray.push(this.newDynamic)

    //Llamamos nuestra acción
    this.store.dispatch(
      new EmployeesActions.GetEmployees({
        name: 'Olga',
      }),
    )
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
