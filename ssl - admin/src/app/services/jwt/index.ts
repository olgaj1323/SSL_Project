import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import store from 'store'

const domain2 = 'http://ssl-balancer-1418801584.us-east-1.elb.amazonaws.com'

@Injectable()
export class jwtAuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(domain2 + '/api/v1/auth/signin', {
      username_email: email,
      password: password,
    })
  }

  register(email: string, password: string, name: string): Observable<any> {
    return this.http.post(domain2 + '/api/v1/auth/register', { email, password, name })
  }

  currentAccount(): Observable<any> {
    const accessToken = store.get('accessToken')
    const params = accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            AccessToken: accessToken,
          },
        }
      : {}

    return this.http.get(domain2 + 'api/v1/user/1', params)
  }

  logout(): Observable<any> {
    return this.http.get(domain2 + '/api/auth/logout')
  }
  getToken(): string {
    return localStorage.getItem('token')
  }
}
