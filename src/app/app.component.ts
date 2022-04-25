import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
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
  
  constructor(private userService:UserService) {}
 
  ngOnInit() {
    this.refreshPeople()
  }
 
  refreshPeople() {
    this.userService.findAll()
      .subscribe(data => {
        console.log(data)
        this.users=data;
      })      
}

  addPerson() {
    this.userService.save(this.user)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
}
}
