import {Router, RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserFormComponent} from './new-user-form/new-user-form.component';
import {NgModule} from '@angular/core';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'addUser',
    component: NewUserFormComponent
  },
  {
    path: 'editUser',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule {
}
