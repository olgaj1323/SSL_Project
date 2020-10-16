import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss'],
})
export class TerminosCondicionesComponent implements OnInit {
  editorForm: FormGroup
  constructor() {}
  editorStyle = {
    height: '300px',
    backgroundColor: '#F2F4F8',
  }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      editor: new FormControl(null),
    })
  }
  onSubmit() {
    console.log(this.editorForm.get('editor').value)
  }
}
