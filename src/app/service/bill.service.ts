import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private billsUrl : string;

  constructor(private http: HttpClient) {
    this.billsUrl = 'http://localhost:8080/app/bills';
  }

  public findAll(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.billsUrl);
  }
}
