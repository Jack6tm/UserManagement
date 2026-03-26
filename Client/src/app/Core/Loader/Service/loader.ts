import { Injectable, Signal, signal } from '@angular/core';
import { Loader } from '../Interface/loader';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService implements Loader {
  private _loading$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this._loading$.asObservable();

  constructor() { }

  public show(): void {
    this._loading$.next(true);
  }

  public hide(): void {
    this._loading$.next(false);
  }
}
