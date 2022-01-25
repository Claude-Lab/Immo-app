import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OwnerComponent} from "./owner.component";
import {OwnerRoutingModule} from "./owner-routing.module";
import { OwnerFormComponent } from './owner-form/owner-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {OwnerFormModule} from "./owner-form/owner-form.module";
import {UserApiService} from "../../shared/service/user-api.service";


@NgModule({
  declarations: [OwnerComponent],
  imports: [
    CommonModule,
    OwnerFormModule,
    OwnerRoutingModule,
    ReactiveFormsModule
  ],
  exports: [OwnerComponent],
  providers: [UserApiService]
})
export class OwnerModule { }
