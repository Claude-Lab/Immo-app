import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {

  formSubmitted = false;

  ownerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    phone: new FormControl(),

  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.formSubmitted = true;
    if (this.ownerForm.valid) {
      this.formSubmitted = true;
    } else {
      this.formSubmitted = false;
    }
  }

}
