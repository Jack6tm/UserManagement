import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserInterface } from '../Interface/user-interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpSvc } from '../../Auth/Service/http-svc';



export interface UserApi {
  id: number,
  name: String,
  first_name: String,
  company_position: String,
  email: String,
  role: Array<any>
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends HttpSvc implements UserInterface {
  private http = inject(HttpClient);
  private static API_PATH = "/users";

  constructor() {
    super();
  }

  public getAll(): Observable<any> {
    return this.http.get<UserApi>(
      `${this.apiUrl}${UserService.API_PATH}`,
      { headers: this.httpHeader() }
    );
  }

  public delete(id: Number) {
    return this.http.delete(
      `${this.apiUrl}${UserService.API_PATH}/${id}`,
      { headers: this.httpHeader() }
    );
  }
}
