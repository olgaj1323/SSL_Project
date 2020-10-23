import { Component, OnInit } from '@angular/core'

import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { Observable, Subscription } from 'rxjs'
import * as XLSX from 'xlsx'
import { NzNotificationService } from 'ng-zorro-antd'

@Component({
  selector: 'app-mass-load-users',
  templateUrl: './mass-load-users.component.html',
  styleUrls: ['./mass-load-users.component.scss'],
})
export class MassLoadUsersComponent implements OnInit {
  subscription: Subscription = new Subscription()
  employeeSubscription$: Observable<any> = this.store.pipe(select(Reducers.getEmployees))

  loading: boolean = false

  isMassLoadUserModalOpen: boolean = true

  fileLoader: boolean = false
  structuredData = []

  constructor(private store: Store<any>, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.suscribeToEmployees()
  }

  suscribeToEmployees() {
    this.subscription.add(
      this.employeeSubscription$.subscribe(state => {
        this.isMassLoadUserModalOpen = state.isMassLoadUserModalOpen
        this.loading = state.loading
      }),
    )
  }

  onFileChange(evt: any) {
    this.structuredData = []

    const target: DataTransfer = <DataTransfer>evt.target
    const reader: FileReader = new FileReader()

    if (!this.isFileExtensionCorrect(target.files[0])) return

    reader.onload = (e: any) => {
      const bstr: string = e.target.result
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' })
      const wsname: string = wb.SheetNames[0]
      const ws: XLSX.WorkSheet = wb.Sheets[wsname]
      const excelData = XLSX.utils.sheet_to_json(ws, { header: 1 })

      if (!this.isCorrectRowsLength(excelData)) return
      this.structureData(excelData)
    }

    reader.onerror = error => {
      this.notification.warning('Error desconocido', 'Problemas leyendo el archivo')
      console.log(error)
    }

    reader.onloadstart = () => {
      this.fileLoader = true
    }

    reader.onloadend = () => {
      this.fileLoader = false
    }

    reader.readAsBinaryString(target.files[0])
  }

  isFileExtensionCorrect(file): boolean {
    const extension = this.returnFileExtension(file.name)

    if (extension !== 'xlsx') {
      this.notification.warning(
        'El formato debe ser .xlsx',
        'Por favor verifica la extensión del archivo',
      )
      return false
    }

    return true
  }

  returnFileExtension(fileName: string): string {
    return fileName
      .split('.')
      .pop()
      .toLowerCase()
  }

  isCorrectRowsLength(excelData): boolean {
    console.log(excelData.length)
    /* if (excelData.length > 31) {
      this.notification.warning("Mensaje", "El archivo no debe tener más de 30 filas");
      return false;
    } */

    /*  if (excelData.length < 6) {
      this.notification.warning("Mensaje", "El archivo debe tener mínimo 5 filas");
      return false;
    } */

    return true
  }

  structureData(excelData) {
    excelData.forEach((row, rowIndex) => {
      if (rowIndex == 0) return //Nos saltamos el encabezado

      //Validacion de numero de columnas
      if (row.length !== 6) {
        this.notification.warning('Mensaje', 'La estructura no corresponde al formato aceptado')
        throw 'La estructura del archivo no es correcta'
      }
      //validamos los campos
      for (var i = 0; i < row.length; i++) {
        if (!row[i] || row[i].toString().trim() == '' || row[i] == '  ') {
          this.notification.warning(
            'Mensaje',
            `Datos incorrectos: fila ${rowIndex}, columna ${i + 1}`,
          )
          throw 'El archivo no es correcto'
        }
      }

      this.structuredData.push({
        document: row[0],
        name: row[1],
        roles: [row[2]],
        email: row[3],
        mobile: row[4],
        phone: row[5],
      })
    })

    this.store.dispatch(new EmployeesActions.CreateEmployees(this.structuredData))
  }

  closeMassLoadModal() {
    this.subscription.unsubscribe()
    this.store.dispatch(new EmployeesActions.CloseMassLoadUsersModal())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
