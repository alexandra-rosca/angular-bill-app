import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './service/login.service';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserFormUpdateComponent } from './user-form-update/user-form-update.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillService } from './service/bill.service';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './service/payment.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    LoginFormComponent,
    UserAccountComponent,
    UserFormUpdateComponent,
    BillListComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService, LoginService, BillService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
