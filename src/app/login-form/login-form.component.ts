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
  returnUrl: string = '/account';
  user: User ={};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService) {

    
  }

  onSubmit() { 

    this.loginService.login(this.user.email!, this.user.password!)
      .subscribe(
        data => {
          
          this.router.navigate([this.returnUrl]);
          
        });
  }


}

