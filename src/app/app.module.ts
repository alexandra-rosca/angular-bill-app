import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    UserListComponent,
    UserFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
