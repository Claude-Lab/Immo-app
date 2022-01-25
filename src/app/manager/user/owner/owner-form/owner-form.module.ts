import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OwnerComponent} from "../owner.component";
import {OwnerFormRoutingModule} from "./owner-form-routing.module";
import {OwnerFormComponent} from "./owner-form.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [OwnerFormComponent],
  imports: [
    CommonModule,
    OwnerFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [OwnerFormComponent]
})
export class OwnerFormModule { }
