import { Component, OnInit } from '@angular/core';
import {first} from "rxjs";
import {User} from "../../../model/user";
import {UserApiService} from "../../shared/service/user-api.service";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  loading = false;
  users: User[] = [];

  displayedColumns: string[] = [
    "Locataires",
    "mobile",
    "email",
    "details",
    "modifier",
  ];

  constructor(private userService: UserApiService) { }

  ngOnInit(): void {
    this.getTenants();
  }

  private getTenants() {
    this.loading = true;
    this.userService.getTenants().pipe(first()).subscribe(
      report => {
        this.loading = false,
          this.users = report
      },
      err => {
        console.log(err);
      })
  }

  onDeleteConfirm(event: { confirm: { resolve: () => void; reject: () => void; }; }): void {
    if (window.confirm('Êtes-vous certain de vouloir supprimer ce locataire ?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
