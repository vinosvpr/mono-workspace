import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // declarations: [TodoListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent,
      },
    ]),
  ],
})
export class TodoListModule {}
