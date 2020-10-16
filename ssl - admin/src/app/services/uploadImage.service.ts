import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClientModule, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}
}
