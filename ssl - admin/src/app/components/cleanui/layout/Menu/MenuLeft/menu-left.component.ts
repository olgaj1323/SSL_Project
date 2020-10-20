import { Component, OnInit, Input } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators'
import * as _ from 'lodash'
import { select, Store } from '@ngrx/store'
import { MenuService } from 'src/app/services/menu.service'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'cui-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss'],
})
export class MenuLeftComponent implements OnInit {
  menuColor: String

  isMenuShadow: Boolean
  isMenuUnfixed: Boolean
  isSidebarOpen: Boolean
  isMobileView: Boolean
  leftMenuWidth: Number
  isMenuCollapsed: boolean
  logo: String
  menuData: any[]
  menuDataActivated: any[] = []
  role: String
  user: any

  constructor(private menuService: MenuService, private store: Store<any>, private router: Router) {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    this.role = userInfo ? userInfo.role : null
  }

  ngOnInit() {
    // this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
    //   this.isMenuCollapsed = state.isMenuCollapse
    //   console.log('isMenuCollapsable', this.isMenuCollapsed)
    // })
    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.user = state
    })

    this.menuService.getMenuData().subscribe(menuData => (this.menuData = menuData))
    // console.log('user', this.user)
    // console.log('user', this.user.roles[0])
    for (let j = 0; j < this.menuData.length; j++) {
      // console.log('t', this.user.roles[0])
      if (this.menuData[j].roles_menu.includes(this.user.roles[0])) {
        this.menuDataActivated.push(this.menuData[j])
      }
    }
    // console.log('MENUDATAACTIVATED', this.menuDataActivated)

    this.activateMenu(this.router.url)
    console.log('URL', this.router.url)
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.activateMenu(event.url ? event.url : null)
      })
  }

  activateMenu(url: any, menuData = this.menuDataActivated) {
    console.log('ACTIVATED', this.menuDataActivated)
    menuData = JSON.parse(JSON.stringify(menuData))
    const pathWithSelection = this.getPath({ url: url }, menuData, (entry: any) => entry, 'url')
    if (pathWithSelection) {
      pathWithSelection.pop().selected = true
      _.each(pathWithSelection, (parent: any) => (parent.open = true))
    }
    this.menuDataActivated = menuData.slice()
  }

  getPath(
    element: any,
    source: any,
    property: any,
    keyProperty = 'key',
    childrenProperty = 'children',
    path = [],
  ) {
    let found = false
    const getElementChildren = (value: any) => _.get(value, childrenProperty)
    const getElementKey = (value: any) => _.get(value, keyProperty)
    const key = getElementKey(element)
    return (
      _.some(source, (e: any) => {
        if (getElementKey(e) === key) {
          path.push(e)
          return true
        } else {
          return (found = this.getPath(
            element,
            getElementChildren(e),
            property,
            keyProperty,
            childrenProperty,
            path.concat(e),
          ))
        }
      }) &&
      (found || _.map(path, property))
    )
  }
  onCollapse(value: any) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isMenuCollapsed: value,
      }),
    )
  }

  toggleSettings() {}
}
