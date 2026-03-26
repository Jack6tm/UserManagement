import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpSvc } from './http-svc';
import { AuthInterface } from '../Interface/auth';
import { UserElement } from '../../User/Interface/user-element';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpSvc implements AuthInterface {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getAuthToken());
  public currentUser = signal<any>(null);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient) {
    super();
    if (this.isAuth()) {
      this.getMe().subscribe({
        error: (err) => {
          console.error('getMe error:', err);
          this.currentUser.set(null);
          this._isLoggedIn$.next(false);
        },
        next: (usr) => {
          this.currentUser.set(usr);
        }
      });
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/login`,
      { email, password }
    ).pipe(
      tap((res: any) => {
        localStorage.setItem(this.tokenKey, res.token);
        this._isLoggedIn$.next(true);
        this.getMe().subscribe((user) => this.currentUser.set(user));
      })
    );
  }

  logout() {
    this._isLoggedIn$.next(false);
    this.currentUser.set(null);
    return this.http.post(
      `${this.apiUrl}/logout`,
      {}
    );
  }

  getMe() {
    return this.http.get<UserElement>(`${this.apiUrl}/me`, { headers: this.httpHeader() });
  }

  isAuth() {
    const token = this.getAuthToken();
    if (!token) {
      this._isLoggedIn$.next(false);
      this.currentUser.set(null);
      return false;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this._isLoggedIn$.next(payload.exp * 1000 > Date.now());
      return payload.exp * 1000 > Date.now();
    } catch {
      this._isLoggedIn$.next(false);
      return false;
    }
  }
}
