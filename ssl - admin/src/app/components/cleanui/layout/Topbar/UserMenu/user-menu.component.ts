import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/firebase.auth.service'

@Component({
  selector: 'cui-topbar-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class TopbarUserMenuComponent {
  badgeCount: number = 7
  userName: string
  billingPlan: string
  email: string
  phone: string
  role: string

  constructor(public authService: AuthService) {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    this.userName = userInfo ? userInfo.displayName : 'Anonymous'
    this.billingPlan = 'Professional'
    this.email = userInfo ? userInfo.email : ''
    this.phone = userInfo ? userInfo.phoneNumber : '-'
    this.role = userInfo ? userInfo.roles : ''
  }

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }

  logout() {
    this.authService.SignOut()
  }
}
