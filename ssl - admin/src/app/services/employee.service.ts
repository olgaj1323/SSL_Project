import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import store from 'store'

const domain2 = 'http://balanceadorssltcp-2bd7dae9cb338b43.elb.us-east-1.amazonaws.com'

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(filterParams: object): Observable<any> {
    //const accessToken = store.get('accessToken')
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJpYXQiOjE1OTkxMjQ0MjMsImV4cCI6MTYwNjkwMDQyM30.5rB3qLiyJFTEbupuaRV_X1dSDPBBKlEdEFSArwjbE4Q'
    const params = accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            AccessToken: accessToken,
          },
        }
      : {}

    return this.http.get(domain2 + '/api/v1/user/', params)
  }
}
