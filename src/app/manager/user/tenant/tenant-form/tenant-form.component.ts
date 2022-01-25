import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.css']
})
export class TenantFormComponent implements OnInit {

  formSubmitted = false;

  tenantForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    phone: new FormControl(),
    avatar: new FormControl(),
    tenantAddressBefore: new FormControl(),
    tenantAddressAfter: new FormControl(),
    guarantorTenant: new FormControl()

  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.formSubmitted = true;
    if (this.tenantForm.valid) {
      this.formSubmitted = true;
    } else {
      this.formSubmitted = false;
    }
  }

}
