import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PaymentComponent } from './payment/payment.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserFormUpdateComponent } from './user-form-update/user-form-update.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'registerUser', component: UserFormComponent},
  { path: 'users', component: UserListComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'account', component: UserAccountComponent},
  { path: 'update-user', component: UserFormUpdateComponent},
  { path: 'bills', component: BillListComponent},
  { path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
