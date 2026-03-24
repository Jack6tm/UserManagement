import { inject, Injectable } from '@angular/core';
import { Role as RoleInterface} from "../Interface/role";
import { Observable } from 'rxjs';
import { RoleElement } from '../Interface/role-element';
import { HttpClient } from '@angular/common/http';
import { HttpSvc } from '../../Auth/Service/http-svc';
@Injectable({
  providedIn: 'root',
})
export class Role extends HttpSvc implements RoleInterface {
  private http = inject(HttpClient);
  private static API_PATH = "/roles";

  public getAll():Observable<RoleElement[]>{
    return this.http.get<RoleElement[]>(
      `${this.apiUrl}${Role.API_PATH}`,
      { headers: this.httpHeader() }
    );
  }
 }
