import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserApiService} from "../../shared/service/user-api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  loading = false;
  users!: User[];

  displayedColumns: string[] = [
    "Propriétaires",
    "mobile",
    "email",
    "details",
    "modifier",
  ];

  constructor(private userService: UserApiService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  private getOwners() {
    this.loading = true;
    this.userService.getOwners().pipe(first()).subscribe(
      report => {
        this.loading = false,
          this.users = report
      },
      err => {
        console.log(err);
      })
  }

  onDeleteConfirm(event: { confirm: { resolve: () => void; reject: () => void; }; }): void {
    if (window.confirm('Êtes-vous certain de vouloir supprimer ce garant ?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
