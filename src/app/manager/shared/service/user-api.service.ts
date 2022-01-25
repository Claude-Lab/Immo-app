import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private _refreshNeeded = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  get refreshNeeded() {
    return this._refreshNeeded;
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  public getTenants() {
    return this.http.get<User[]>(`${environment.apiUrl}/tenants`);
  }

  public getGuarantors() {
    return this.http.get<User[]>(`${environment.apiUrl}/guarantors`);
  }

  public getOwners() {
    return this.http.get<User[]>(`${environment.apiUrl}/owners`);
  }

  public getManagers() {
    return this.http.get<User[]>(`${environment.apiUrl}/managers`);
  }

  public getProfile(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/profile/${id}`);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  }
}
