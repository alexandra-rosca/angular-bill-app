import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PaymentDetails } from '../model/payment-details';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl:string;

  constructor(private http: HttpClient) {
    this.paymentUrl = 'http://localhost:8080/app/payments';
  }

  public makePayment(payment: PaymentDetails):Observable<PaymentDetails> {
    const headers = {'content-type' : 'application/json'};
    const body = JSON.stringify(payment);
    console.log(body)
    return this.http.post<PaymentDetails>(this.paymentUrl + '/bills', body, {'headers':headers});
  }
}
