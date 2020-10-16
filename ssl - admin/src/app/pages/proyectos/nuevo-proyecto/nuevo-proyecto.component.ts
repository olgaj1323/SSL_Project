import { Component, OnInit } from '@angular/core'
import { Form, FormGroup, FormBuilder, FormControlName, FormControl } from '@angular/forms'
import { NzUploadChangeParam, NzUploadFile, UploadFile } from 'ng-zorro-antd'
import { Observable } from 'rxjs'
import { helpers } from 'chart.js'

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.scss'],
})
export class NuevoProyectoComponent implements OnInit {
  tecnico = true
  isRechazado: boolean
  imageURL: string //logo
  image_upload_url: string //this.appConfig.api.base_url + '/upload/sysUpload/add'; pdf or ppt

  url = ''
  noFoto = true
  siFoto = false
  hotSpot = false
  isVisibleHotSpot = false
  entornoVirtual: FormGroup
  proyectForm: FormGroup
  hotSpotForm: FormGroup
  imgURL = ''

  previewImage: string | undefined = ''
  previewVisible = false
  title = 'app'
  pdfSrc: string

  fileList: NzUploadFile[] = []

  narracion = false
  video = false
  infografia = false
  arrayHotSpot = []
  constructor(private fb: FormBuilder) {
    ;(this.proyectForm = this.fb.group({
      titulo: '',
      subtitulo: '',
      file: null,
      textAreaProyecto: '',
    })),
      (this.hotSpotForm = this.fb.group({
        opcionesExtra: [null],
        tituloHotSpot: '',
        descripcion: '',
        textoPrincipal: '',
        textoSecundario: '',
        piezasGraficas: ' ',
      }))
  }

  ngOnInit(): void {
    this.entornoVirtual = new FormGroup({
      textAreaFotos: new FormControl(''),
    })
  }
  //Logo
  onFileChange($event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.proyectForm.patchValue({
      avatar: file,
    })
    this.proyectForm.get('file').updateValueAndValidity()

    // File Preview
    const reader = new FileReader()
    reader.onload = () => {
      this.imageURL = reader.result as string
    }
    reader.readAsDataURL(file)
  }
  onChange($event) {}
  //PDF or PPT

  handleChange({ file }: NzUploadChangeParam): void {
    const status = file.status
    console.log(status)
    if (status !== 'removed') this.pdfSrc = '../../../../assets/Imagenes/Evacuation Map test.pdf'

    if (status !== 'uploading') {
      console.log(file)
    }
    if (status === 'done') {
      console.log('file update success')

      this.pdfSrc = '../../../../assets/Imagenes/Evacuation Map test.pdf'
      console.log('pdfSrc', this.pdfSrc)
    } else if (status === 'error') {
      console.log('file update success')
    }
  }

  removePDF = (file: UploadFile) => {
    let id
    this.pdfSrc = ''
    console.log('Remove pdfSrc:', this.pdfSrc)
    return true
  }

  handleChangePhoto360(file) {
    console.log(this.fileList[0])
  }

  handlePreview = async (file: NzUploadFile) => {
    console.log('Preview')
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!)
    }
    this.previewImage = file.url || file.preview
    this.previewVisible = true
  }

  onChecked(e) {
    console.log(e)
    if (e) {
      this.noFoto = false
      this.siFoto = true
    } else {
      this.noFoto = true
      this.siFoto = false
    }
  }
  enviarDescripcion() {}
  confirmarFotos() {
    console.log(this.fileList)
    this.hotSpot = true
  }
  addHotSpot($event) {
    this.isVisibleHotSpot = true
  }
  editHotSpotClose() {
    this.isVisibleHotSpot = false
  }
  showNarracion() {
    this.narracion = true
    this.video = false
    this.infografia = false
  }
  showVideo() {
    this.narracion = false
    this.video = true
    this.infografia = false
  }
  showInfografia() {
    this.narracion = false
    this.video = false
    this.infografia = true
  }
  Rechazado() {
    this.isRechazado = true
  }
  rechazadoClose() {
    this.isRechazado = false
  }
  rechazadoConfirmar() {}

  AgregarHotSpot(): void {
    for (const i in this.hotSpotForm.controls) {
      this.hotSpotForm.controls[i].markAsDirty()
      this.hotSpotForm.controls[i].updateValueAndValidity()
    }
    console.log(this.hotSpotForm)
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      console.log('readerActive')
      var reader = new FileReader()

      reader.readAsDataURL(event.target.files[0]) // read file as data url

      reader.onload = event => {
        // called once readAsDataURL is completed
      }
    }
  }
}
function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
