import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './Core/Auth/Interceptor/auth-interceptor';
import { loaderInterceptor } from './Core/Loader/Interceptor/loader-interceptor-interceptor';
import { toastInterceptor } from './Core/Toast/Interceptor/toast-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor, loaderInterceptor, toastInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
