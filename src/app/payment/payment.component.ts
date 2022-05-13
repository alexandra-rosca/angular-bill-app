import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bill } from '../model/bill';
import { PaymentDetails } from '../model/payment-details';
import { BillService } from '../service/bill.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: PaymentDetails={
    setMoneySum: function (price: number): void {
      throw new Error('Function not implemented.');
    }
  };
  bills: Bill[] =[];
  summary: number=0;

  constructor(private billService: BillService, 
    private toastr: ToastrService,
    private paymentService: PaymentService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    console.log('init', this.payment)
    this.billService.findAll().subscribe(data => {
      this.bills = data;
      
    });
   
  }

  billsSummary() {
    for(let i = 0; i < this.bills.length; i++) {
      this.summary += this.bills[i].price!;
    }
    this.payment.setMoneySum(this.summary)
  }

  onSubmit() {
    console.log(this.payment);
    this.paymentService.makePayment(this.payment).subscribe(result => this.showSuccess);
  }

  showSuccess() { 
    this.toastr.success('Payment done!');
  }

}
