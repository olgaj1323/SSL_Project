import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as SettingsActions from 'src/app/store/settings/actions'

@Component({
  selector: 'app-toogle-menu',
  templateUrl: './toogle-menu.component.html',
  styleUrls: ['./toogle-menu.component.scss'],
})
export class ToogleMenuComponent implements OnInit {
  isMenuCollapsed: boolean
  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isMenuCollapsed = state.isMenuCollapsed
    })
  }
  toggleCollapsed(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed
    this.store.dispatch(new SettingsActions.SetStateAction({}))
    console.log('boton toogle', this.isMenuCollapsed)
  }
  ngOnInit(): void {}
}
