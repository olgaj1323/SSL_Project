import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import store from 'store'
import { environment } from 'src/environments/environment'

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
}
