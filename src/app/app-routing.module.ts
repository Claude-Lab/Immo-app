import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  // { path: 'manager', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  // { path: 'layout', loadChildren: () => import('./shared/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: '', redirectTo: 'manager/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'manager/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
