import { Routes } from '@angular/router';
// import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFA_APP_URL = 'http://localhost:5201/remoteEntry.js';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    title: 'Mono Front end: Home App -  Home',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Mono Front end: Home App -  Todo List',
    path: 'todo-list',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFA_APP_URL,
        remoteName: 'mfaApp',
        exposedModule: './TodoListModule',
      })
        .then((m) => m.TodoListModule)
        .catch((err) => console.log(err));
    },
    // component: TodoListComponent,
  },
];

// export const routeCompArr = [HomeComponent, TodoListComponent];
export const routeCompArr = [HomeComponent];
