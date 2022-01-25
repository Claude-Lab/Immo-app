import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantFormComponent} from './tenant-form/tenant-form.component';
import {TenantComponent} from "./tenant.component";
import {TenantRoutingModule} from "./tenant-routing.module";
import {TenantFormModule} from "./tenant-form/tenant-form.module";
import {ReactiveFormsModule} from "@angular/forms";
import {UserApiService} from "../../shared/service/user-api.service";

@NgModule({
  declarations: [
    TenantComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    TenantFormModule,
    ReactiveFormsModule
  ],
  exports: [
    TenantComponent
  ],
  providers: [UserApiService]
})
export class TenantModule {
}
