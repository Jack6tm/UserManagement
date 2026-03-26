import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Toast } from '../Service/toast';
import { inject } from '@angular/core';

export const toastInterceptor: HttpInterceptorFn = (req, next) => {
  const toastSvc: Toast = inject(Toast);
  return next(req).pipe(
    catchError((err) => {
      if (err.status == 403 && err.error.message !== null) {
        toastSvc.show.set(true);
        toastSvc.message.set(err.error.message);
        setTimeout(() => {
          toastSvc.show.set(false);
        }, 6000);
      }
      return throwError(() => err);
    })
  );
};
