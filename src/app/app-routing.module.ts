import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: '', redirectTo: 'manager', pathMatch: 'full'},
  {path: '**', redirectTo: 'manager'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
