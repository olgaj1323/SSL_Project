import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { userLogged } from '../../../services/user'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  constructor(private store: Store<any>) {}

  username: string
  role: string
  verificarEmail = true
  bienvenida = false
  dependencias = []
  public addresses: any[] = [
    {
      id: 1,
      address: '',
    },
  ]
  lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6],
    ],
  }
  lineOptions = {
    fullWidth: !0,
    chartPadding: {
      right: 40,
    },
  }
  ngOnInit(): void {
    this.store.pipe(select(Reducers.getUser)).subscribe(userState => {
      this.role = userState.roles[0]
      this.username = userState.username
      console.log('User State role', userState.roles[0], this.username, this.role)
    })
  }
  addDependencia() {
    this.dependencias.push()
    console.log('click button')
  }
  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
    })
  }
  removeAddress(i: number) {
    this.addresses.splice(i, 1)
  }
  guardarCambios() {
    this.verificarEmail = false
    this.bienvenida = true
  }
}
