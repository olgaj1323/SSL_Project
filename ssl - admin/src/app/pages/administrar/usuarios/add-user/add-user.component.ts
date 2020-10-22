import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, FormArray, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  employeesForm = this.fb.array([])

  constructor(private store: Store<any>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addNewEmployeeRow()
  }

  addNewEmployeeRow() {
    this.employeesForm.push(
      this.fb.group({
        document: ['', [Validators.required]],
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        mobile: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        roles: ['', [Validators.required]],
      }),
    )
  }

  removeEmployeeRow(index) {
    this.employeesForm.removeAt(index)
  }

  onSubmit() {
    console.log(this.employeesForm.value)
  }

  closeAddUserModal() {
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }
}
