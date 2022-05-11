
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService {

  private usersUrl : string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/app/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User):Observable<User> {
    const headers = {'content-type' : 'application/json'};
    const body = JSON.stringify(user);
    console.log(body)
    return this.http.post<User>(this.usersUrl, body, {'headers':headers});
  }

  public update(id: string, user: User): Observable<any> {
    const headers = {'content-type' : 'application/json'};
    const body = JSON.stringify(user);
    console.log(body)
    return this.http.put<any>(`${this.usersUrl}/${id}`, body, {'headers':headers});
  }

  //splice
}
