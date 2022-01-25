import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TenantFormComponent} from "./tenant-form.component";
import {TenantFormRoutingModule} from "./tenant-form-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TenantFormComponent
  ],
  imports: [
    CommonModule,
    TenantFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TenantFormComponent
  ]
})
export class TenantFormModule { }
