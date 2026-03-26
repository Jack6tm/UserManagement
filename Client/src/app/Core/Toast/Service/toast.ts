import { Injectable, signal } from '@angular/core';
import { Toast as ToastInterface} from '../Interface/toast';
@Injectable({
  providedIn: 'root',
})
export class Toast implements ToastInterface {
  public show = signal<boolean>(false);
  public message = signal<string>('');
}
