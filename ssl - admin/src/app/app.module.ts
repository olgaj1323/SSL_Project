import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, LOCALE_ID } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { reducers, metaReducers } from './store/reducers'
import { firebaseConfig } from './services/firebase.auth.service'
import { QuillModule } from 'ngx-quill'

/**
 * Locale Registration
 */

import { NZ_I18N, en_US as localeZorro } from 'ng-zorro-antd'
import { ChartsModule } from 'ng2-charts'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './store/user/effects'
import { jwtAuthService } from './services/jwt'
const LOCALE_PROVIDERS = [
  { provide: LOCALE_ID, useValue: 'en' },
  { provide: NZ_I18N, useValue: localeZorro },
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),

    /**
     * NgRx Store
     */
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),

    /**
     * Nprogress Modules
     */
    NgProgressModule.withConfig({
      thick: true,
      spinner: false,
      color: '#0190fe',
    }),
    NgProgressRouterModule,
    NgProgressHttpModule,

    /**
     * Firebase Modules
     */
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,

    /**
     * Routing Module
     */
    AppRoutingModule,
  ],
  providers: [...LOCALE_PROVIDERS, { provide: SETTINGS, useValue: {} }, jwtAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
