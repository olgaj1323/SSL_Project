import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { getMenuData } from './menu.service.config'
import { select, Store } from '@ngrx/store'
import { state } from '@angular/animations'
import * as Reducers from 'src/app/store/reducers'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  router: any
  // getMenuPerRole = getMenuData
  constructor(private store: Store<any>) {}

  getMenuData(): Observable<any[]> {
    return of(getMenuData)
  }
}
