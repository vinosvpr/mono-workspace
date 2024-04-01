import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes, routeCompArr } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
