import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bill Application';
  users: User[] = [];
  user = new User();

  constructor(private userService: UserService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.userService.findAll()
      .subscribe(data => {
        console.log(data)
        this.users = data;
      })
  }

  addPerson() {
    this.userService.save(this.user)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
