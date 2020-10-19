import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthService } from 'src/app/services/firebase.auth.service'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { take, map } from 'rxjs/operators'
import { Store, select } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { userInfo } from 'os'

const ROLE_ACCESS = [
  {
    role: 'ROLE_SUPER_ADMIN',
    routes: ['/inicio', '/recover'],
  },
  {
    role: 'admin',
    routes: ['/register'],
  },
  {
    role: 'tecnico',
    routes: ['/recover'],
  },
]

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router, private store: Store<any>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true
    this.store.pipe(select(Reducers.getUser)).subscribe(userState => {
      const roleAcceso = ROLE_ACCESS.find(element => element.role == userState.roles[0])
      if (!roleAcceso) {
        this.router.navigate(['404'])
        return false
      }
      const hasAccess: boolean = roleAcceso.routes.includes(state.url)
      console.log('has acces', hasAccess, state.url, roleAcceso.routes)
      if (!hasAccess) this.router.navigate(['404'])
      return hasAccess
    })
    return true
    // if (environment.authenticated) {
    //   // skip guard checking on demo environment serve/build, remove it in your app
    //   return true
    // }

    // return this.authService.getUser.pipe(
    //   take(1),
    //   map(user => {
    //     if (user) {
    //       return true
    //     }
    //     this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
    //     return false
    //   }),
    // )
  }
}
