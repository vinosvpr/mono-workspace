import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TodoListModule } from './todo-list/todo-list.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
