import { Observable } from "rxjs";
import { RoleElement } from "./role-element";

export interface Role {
  getAll: ()=>Observable<RoleElement[]>;
}
