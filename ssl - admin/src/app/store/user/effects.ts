import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'
import { Observable, of, empty, from } from 'rxjs'
import { map, switchMap, catchError, withLatestFrom, concatMap } from 'rxjs/operators'
import store from 'store'
import { NzNotificationService } from 'ng-zorro-antd'

import * as Reducers from 'src/app/store/reducers'
import * as UserActions from './actions'
import { jwtAuthService } from 'src/app/services/jwt'
import { firebaseAuthService } from 'src/app/services/firebase'

@Injectable()
export class UserEffects implements OnInitEffects {
  constructor(
    private actions: Actions,
    private jwtAuthService: jwtAuthService,
    private router: Router,
    private rxStore: Store<any>,
    private firebaseAuthService: firebaseAuthService,
    private notification: NzNotificationService,
  ) {}

  ngrxOnInitEffects(): Action {
    return { type: UserActions.LOAD_CURRENT_ACCOUNT }
  }

  @Effect()
  login: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOGIN),
    map((action: UserActions.Login) => action.payload),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([payload, settings]) => {
      // jwt login
      if (settings.authProvider === 'jwt') {
        return this.jwtAuthService.login(payload.email, payload.password).pipe(
          map(response => {
            console.log('respuesta effect', response)
            if (response && response.data.accessToken) {
              console.log('RESPONSE', response)
              store.set('accessToken', response.accessToken)
              this.notification.success('Logged In', 'You have successfully logged in!')
              localStorage.setItem(
                'user',
                JSON.stringify({
                  id: response.data.id,
                  //    name: 'Administrator',
                  email: response.data.email,
                  role: response.data.roles,
                  token: response.data.accessToken,
                }),
              )
              this.router.navigate(['/inicio'])
              return new UserActions.LoadCurrentAccountSuccessful(response.data)
            }
            this.notification.warning('Auth Failed', response)
            return new UserActions.LoginUnsuccessful()
          }),
          catchError(error => {
            console.log('LOGIN ERROR: ', error)
            return from([{ type: UserActions.LOGIN_UNSUCCESSFUL }])
          }),
        )
      }
      // firebase login
      return from(this.firebaseAuthService.login(payload.email, payload.password)).pipe(
        map(() => {
          this.notification.success('Logged In', 'You have successfully logged in!')
          return new UserActions.LoadCurrentAccount()
        }),
        catchError((error: any) => {
          this.notification.warning(error.code, error.message)
          return from([{ type: UserActions.LOGIN_UNSUCCESSFUL }])
        }),
      )
    }),
  )

  @Effect()
  register: Observable<any> = this.actions.pipe(
    ofType(UserActions.REGISTER),
    map((action: UserActions.Register) => action.payload),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([payload, settings]) => {
      // jwt register
      if (settings.authProvider === 'jwt') {
        return this.jwtAuthService.register(payload.email, payload.password, payload.name).pipe(
          map(response => {
            if (response && response.id) {
              if (response.accessToken) {
                store.set('accessToken', response.accessToken)
              }
              this.router.navigate(['/'])
              return new UserActions.RegisterSuccessful(response)
            }
            this.notification.warning('Registration Failed', response)
            return new UserActions.RegisterUnsuccessful()
          }),
          catchError(error => {
            console.log('REGISTER ERROR: ', error)
            return from([{ type: UserActions.LOGIN_UNSUCCESSFUL }])
          }),
        )
      }
    }),
  )

  @Effect()
  loadCurrentAccount: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOAD_CURRENT_ACCOUNT),
    map((action: UserActions.LoadCurrentAccount) => true),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([action, settings]) => {
      // jwt load current account
      if (settings.authProvider === 'jwt') {
        return this.jwtAuthService.currentAccount().pipe(
          map(response => {
            if (response && (response.email || response.user)) {
              this.router.navigate(['/Principal/inicio.module'])
              return new UserActions.LoadCurrentAccountSuccessful(response)
            }
            return new UserActions.LoadCurrentAccountUnsuccessful()
          }),
          catchError(error => {
            console.log('ACCOUNT LOAD ERROR: ', error)
            return from([{ type: UserActions.LOGIN_UNSUCCESSFUL }])
          }),
        )
      }

      // do nothing for firebase, as user state subscribed inside firebase service
      return of(new UserActions.EmptyAction())
    }),
  )

  @Effect()
  logout: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOGOUT),
    map((action: UserActions.Logout) => true),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([, settings]) => {
      // jwt logout
      if (settings.authProvider === 'jwt') {
        return this.jwtAuthService.logout().pipe(
          map(() => {
            store.remove('accessToken')
            this.router.navigate(['/auth/login'])
            return new UserActions.FlushUser()
          }),
        )
      }
    }),
  )
}
