import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd'

interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  emailVerified: boolean
  role: string
}
// const domain = 'http://ssl-balancer-1418801584.us-east-1.elb.amazonaws.com'
// const urlLogin = domain + '/api/v1/auth/signin'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private notification: NzNotificationService,
  ) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     const _user = JSON.parse(JSON.stringify(user))
    //     // TODO: modify this code for your needs
    //     localStorage.setItem(
    //       'user',
    //       JSON.stringify({
    //         id: _user.uid,
    //         name: 'Administrator',
    //         email: _user.email,
    //         role: 'regular',
    //         avatar: '',
    //         authorized: true, // set app to authorized state
    //         loading: false,
    //       }),
    //     )
    //   } else {
    //     localStorage.setItem('user', null)
    //   }
    // })
  }

  // async SignIn(email: string, password: string) {
  //   const body = {
  //     username_email: email,
  //     password: password,
  //   }

  //   try {
  //     const resp = await axios.post(urlLogin, body)
  //     console.log(resp.data)
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err)
  //   }
  // }

  get getUser() {
    return this.afAuth.user
  }

  async SignOut() {
    await this.afAuth.signOut()
    localStorage.removeItem('user')
    this.router.navigate(['login'])
  }
}
