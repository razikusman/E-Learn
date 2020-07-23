import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-payment',
  templateUrl: './fees-payment.component.html',
  styleUrls: ['./fees-payment.component.css']
})
export class FeesPaymentComponent implements OnInit {

  myDate: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
