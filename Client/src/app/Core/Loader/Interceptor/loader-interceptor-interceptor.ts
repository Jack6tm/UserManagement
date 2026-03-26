import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../Service/loader';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderSvc = inject(LoaderService);

  const isAuthRoute = req.url.includes('/login');
  if (!isAuthRoute) {
    loaderSvc.show();
  }

  return next(req).pipe(
    finalize(() => loaderSvc.hide())
  )
};
