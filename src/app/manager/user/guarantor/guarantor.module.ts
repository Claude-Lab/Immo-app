import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuarantorComponent} from "./guarantor.component";
import {GuarantorRoutingModule} from "./guarantor-routing.module";



@NgModule({
  declarations: [GuarantorComponent],
  imports: [
    CommonModule,
    GuarantorRoutingModule
  ],
  exports: [GuarantorComponent]
})
export class GuarantorModule { }
