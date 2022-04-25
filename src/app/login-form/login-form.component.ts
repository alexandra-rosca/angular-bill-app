import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm!: FormGroup;
  returnUrl!: string;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService) {

    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  /*ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }*/

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.user.email!, this.user.password!)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        });
  }


}

