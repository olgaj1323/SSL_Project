import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import store from 'store'
import { environment } from 'src/environments/environment'
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import { request } from 'http'

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
const EXCEL_EXTENSION = '.xlsx'

@Injectable()
export class EmployeeService {
  accessToken: any

  constructor(private http: HttpClient) {
    //this.accessToken = store.get('accessToken');
    this.accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJpYXQiOjE1OTkxMjQ0MjMsImV4cCI6MTYwNjkwMDQyM30.5rB3qLiyJFTEbupuaRV_X1dSDPBBKlEdEFSArwjbE4Q'
  }

  getEmployees(filterParams: any): Observable<any> {
    let params: HttpParams = new HttpParams()
    if (filterParams.filter) params = params.append('filter', filterParams.filter)
    if (filterParams.value) params = params.append('value', filterParams.value)
    if (filterParams.offset) params = params.append('offset', filterParams.offset)
    if (filterParams.limit) params = params.append('limit', filterParams.limit)

    const options = this.accessToken
      ? {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            AccessToken: this.accessToken,
          },
          params,
        }
      : {}

    return this.http.get(environment.apiUrl + '/api/v1/user', options)
  }

  createEmployees(request: object): Observable<any> {
    const params = this.accessToken
      ? {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            AccessToken: this.accessToken,
          },
        }
      : {}

    return this.http.post(environment.apiUrl + '/api/v1/user/createWithArray', request, params)
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json)
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] }
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    this.saveAsExcelFile(excelBuffer, excelFileName)
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE })
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION)
  }

  updateEmployees(employeeId: any, request: any): Observable<any> {
    const options = this.accessToken
      ? {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            AccessToken: this.accessToken,
          },
        }
      : {}

    return this.http.put(environment.apiUrl + '/api/v1/user/' + employeeId, request, options)
  }

  getEmployee(employeeId: any): Observable<any> {
    const options = this.accessToken
      ? {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            AccessToken: this.accessToken,
          },
        }
      : {}

    return this.http.get(environment.apiUrl + '/api/v1/user/' + employeeId, options)
  }
}
