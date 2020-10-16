import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'
import { AuthGuard } from 'src/app/components/cleanui/layout/Guard/auth.guard'

// layouts & notfound
import { LayoutAuthComponent } from 'src/app/layouts/Auth/auth.component'
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'
import { Error404Component } from 'src/app/pages/auth/404/404.component'

const COMPONENTS = [Error404Component]

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'auth/login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },

  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/Principal/inicio.module').then(m => m.InicioModule),
      },
      {
        path: 'proyectos',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/proyectos/proyectos.module').then(m => m.ProyectosModule),
      },
      {
        path: 'administrar',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/administrar/administrar.module').then(m => m.AdministrarModule),
      },
    ],
  },

  {
    path: '**',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        component: Error404Component,
        canActivate: [AuthGuard],
        data: { title: 'Not Found' },
      },
    ],
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
