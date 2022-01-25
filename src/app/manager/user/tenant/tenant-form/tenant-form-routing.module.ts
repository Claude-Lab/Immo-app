import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TenantFormComponent} from "./tenant-form.component";

const routes: Routes = [{ path: '', component: TenantFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantFormRoutingModule { }
