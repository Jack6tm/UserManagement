import { Signal } from "@angular/core";

export interface Toast {
  show: Signal<boolean>;
  message: Signal<string>;
}
