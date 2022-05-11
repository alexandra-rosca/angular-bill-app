import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../model/bill';
import { Utility } from '../model/utility';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesServiceService {

  private utilitiesUrl : string;

  constructor(private http: HttpClient) {
    this.utilitiesUrl = 'http://localhost:8080/app/utilities';
  }

  public findAll(): Observable<Utility[]> {
    return this.http.get<Utility[]>(this.utilitiesUrl);
  }
}
