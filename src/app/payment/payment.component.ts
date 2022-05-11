import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Bill } from '../model/bill';
import { PaymentDetails } from '../model/payment-details';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: PaymentDetails={};
  bills: Bill[] =[];
  summary: number=0;

  constructor(private billService: BillService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.billService.findAll().subscribe(data => {
      this.bills = data;
      
    });
   
  }

  billsSummary() {
    for(let i = 0; i < this.bills.length; i++) {
      this.summary += this.bills[i].price!;
    }
    console.log(this.bills[1].price)
  }

  showSuccess() { //pun pe buton
    this.toastr.success('Payment done!');
  }

}
