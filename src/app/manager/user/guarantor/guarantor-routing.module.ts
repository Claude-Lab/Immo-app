import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GuarantorComponent} from "./guarantor.component";

const routes: Routes = [{ path: '', component: GuarantorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuarantorRoutingModule { }
