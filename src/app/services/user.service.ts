import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUser } from '../models/user.interface';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users/`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.usersUrl + '/' + id);
  }
}
