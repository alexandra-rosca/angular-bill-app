import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { Utility } from '../model/utility';
import { BillService } from '../service/bill.service';
import { UtilitiesServiceService } from '../service/utilities-service.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  bills : Bill[]=[];
  utilities: Utility[]=[];

  constructor(private billService: BillService, private utilityService: UtilitiesServiceService) { }

  ngOnInit() {
    this.billService.findAll().subscribe(data => {
      this.bills = data;
    });
    this.utilityService.findAll().subscribe(data => {
      this.utilities = data;
    });
  }
}
