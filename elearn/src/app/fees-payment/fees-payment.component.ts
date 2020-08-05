import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { CreateStudent } from '../create-student';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-fees-payment',
  templateUrl: './fees-payment.component.html',
  styleUrls: ['./fees-payment.component.css']
})
export class FeesPaymentComponent implements OnInit {

  myDate: number = Date.now();
  payments;

  constructor(
    private paymentService :PaymentService,
  ) { }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  ngOnInit() {
    //view student payment details
    this.paymentService.viewpay()
    .subscribe((data:CreateStudent[])=>{
      this.payments = data 
      console.log(this.payments);
      });
    
  }

}
