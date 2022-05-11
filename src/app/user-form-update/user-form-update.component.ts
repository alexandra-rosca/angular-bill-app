import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {find}  from 'lodash';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form-update',
  templateUrl: './user-form-update.component.html',
  styleUrls: ['./user-form-update.component.css']
})
export class UserFormUpdateComponent implements OnInit {

  userId =this.loginService.userId;
  user:User  = {};
  users : User[] =[];
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService,
        private loginService : LoginService) {
    // this.user = new User();
  }
  
  ngOnInit(): void {
    this.userService.findAll().subscribe(user=>{
      this.users =  user;
    })
  }
  gotoAccount() {
    this.router.navigate(['/account']);
  }

  onUpdateSubmit() {
    console.log("user id:", this.userId);
    this.user  = find(this.users,{id:'1'})!
    console.log("user:", this.user);
    this.userService.update(this.userId, this.user).subscribe(result => this.gotoAccount());
  }

}
