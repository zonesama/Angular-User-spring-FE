import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserFormComponent} from './new-user-form/new-user-form.component';
import {UserServiceService} from './user-service.service';
import {AppRountingModule} from './app-rounting.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {TranferDataService} from './tranfer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserFormComponent,
    DeleteUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule, AppRountingModule, HttpClientModule, FormsModule
  ],
  providers: [UserServiceService, TranferDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
