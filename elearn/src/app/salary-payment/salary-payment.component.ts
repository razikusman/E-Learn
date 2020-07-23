import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-payment',
  templateUrl: './salary-payment.component.html',
  styleUrls: ['./salary-payment.component.css']
})
export class SalaryPaymentComponent implements OnInit {

  myDate: number = 1+ Date.now();
  constructor() {}

  ngOnInit() {
  }
}
