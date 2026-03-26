import { Observable } from "rxjs";

export interface UserInterface {
  getAll: ()=>Observable<any>;
  delete: (id: Number)=>Observable<any>;
  update: (id: Number, email: string, password: string, name: string, firstName: string, companyPosition: string, role: Array<any>)=>Observable<any>;
  create: (email: string, password: string, name: string, firstName: string, companyPosition: string, role: Array<any>)=>Observable<any>;
}
