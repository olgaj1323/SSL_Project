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
    //   this.store.pipe(select(Reducers.getUser)).subscribe(userState => {
    console.log('getMenuperROLE', getMenuData)
    //     for (let i = 0; i < userState.roles.length; i++) {
    //       for (let j = 0; j < getMenuData.length; j++) {
    //         console.log('userState.roles[i]', userState.roles[i])
    //         console.log('getMenuData[j].roles', getMenuData[j].roles)
    //         console.log('if', getMenuData[j].roles.includes(userState.roles[i]))
    //         if (!getMenuData[j].roles.includes(userState.roles[i])) {
    //           this.getMenuPerRole.splice(j, 1)
    //         }
    //       }
    //     }
    //   })
    //   console.log('MENU', this.getMenuPerRole)
    return of(getMenuData)
  }
}
