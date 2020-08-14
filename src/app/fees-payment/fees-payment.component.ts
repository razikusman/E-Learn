import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { CreateStudent } from '../create-student';

@Component({
  selector: 'app-fees-payment',
  templateUrl: './fees-payment.component.html',
  styleUrls: ['./fees-payment.component.css']
})
export class FeesPaymentComponent implements OnInit {

  public myDate: number = Date.now();//todays date
  public payments;//variable to store payments details
  public feespayments;//variable to store feespayments details
  public amount : number = 0;//temp variable to store amount for toatal calculation
  public total : number = 0;//variable to store wholesalarytoatal
  public salarytotal : number = 0;//variable to store salarytoatal
  public feestotal : number = 0;//variable to store feestoatal
  public salarytotalyesterday : number = 0;//variable to store salarytoatalyesterday
  public feestotalyesterday : number = 0;//variable to store feestoatalyesterday
  public amountgrph : number = 0;//temp variable to store amount for toatal calculation in grph
  public totalgrph : number = 0;//variable to store salarytoatal in grph
  public salaryarray : number[] = new Array(12);//array to store total of each month
  public feesarray : number[] = new Array(12);//array to store fees total of each month
  public years : number[] = new Array(10);//arry to store last ten years
  public slenght: number = 0; //lenth of salary array
  public monthtoday;//month 
  public yeartoday;//year 
  public value;
  public monthyesterday;//year yesterday
  public clicked = true;

  constructor(
    private paymentService :PaymentService,//paymentservice
    
  ) { }

  ngOnInit() { 

    for (let index = 0; index < 11; index++) {
      this.years[index] = ((new Date().getFullYear() -1 ) - index );//array of ten years from current year 
    }
    this.monthtoday = (new Date().getMonth() + 1).toString() //current month
    this.monthyesterday = (new Date().getMonth()).toString() //yesterday month
    console.log( this.monthyesterday);
    this.yeartoday = new Date().getFullYear().toString() //current year


    //#############################view student feespayment details#############################//////

    this.paymentService.viewpay()
    .subscribe((data:CreateStudent[])=>{
      this.feespayments = data;
      
      /////////////////////////////store toatal in th array and calcuate total////////////////////////
      for (let index = 0; index < this.feespayments.length; index++) {
        this.amount = parseInt(this.feespayments[index].amount);
        this.total =  this.amount + this.total;
        ///////********************************table****************************///

      ////////////////////relevent to current month///////////////////////////////
         if(this.feespayments[index].month == this.monthtoday && this.feespayments[index].year== this.yeartoday){
          this.feestotal =  this.amount + this.feestotal;
        }

        ////////////////////relevent to yesterday month///////////////////////////////
        if(this.feespayments[index].month== this.monthyesterday && this.feespayments[index].year== this.yeartoday) {
          this.feestotalyesterday = this.feestotalyesterday + this.amount;
        }


        ///////********************************graph****************************///

        if(this.feespayments[index].year== this.yeartoday){
          if (this.feesarray[ parseInt(this.feespayments[index].month)]  == null) {
            this.feesarray[ parseInt(this.feespayments[index].month)] =this.amount;
          }

          else{
            this.feesarray[ parseInt(this.feespayments[index].month)] =this.feesarray[ parseInt(this.feespayments[index].month)] + this.amount;
          }
        }

      }

      /////////////////////////store 0at the emaining arrays object///////////////////////////////////
      for (let index = 1; index < 13; index++) {
         if (this.feesarray[index] == null) {
          this.feesarray[index] = 0;
         }
      }
    });
  }

  months = ['1','2','3','4','5','6','7','8','9','10','11','12'];

  public onMonthSelected(event) {
    this.monthtoday = event.target.value;//getdrop down list value
    this.monthyesterday = this.monthtoday -1;
    
////////////////////clear the values////////////////
    this.amount= 0;
    this.salarytotal = 0;
    this.feestotal = 0;
    this.salarytotalyesterday = 0;
    this.feestotalyesterday = 0;

    
    this.paymentService.viewpay()
    .subscribe((data: CreateStudent[])=>{
      this.feespayments = data;
      
      for (let index = 0; index < this.feespayments.length; index++) {
        this.amount = parseInt(this.feespayments[index].amount);

        ///////////////////////////////////relevent to current month////////////////////////////////
         if(this.feespayments[index].month == this.monthtoday && this.feespayments[index].year== this.yeartoday){
          this.feestotal =  this.amount + this.feestotal;
        }
        

        ////////////////////relevent to yesterday month///////////////////////////////
        if(this.feespayments[index].month== this.monthyesterday && this.feespayments[index].year== this.yeartoday) {
          this.feestotalyesterday = this.feestotalyesterday + this.amount;
        }
  
      }
    });
  }




  /////////////////////////////////year selection and display relevent data in chart//////////////////////////////////////////////



  
  public onYearSelected(event) {
    this.value = event.target.value;//getdrop down list value
      
  ////////////////////clear the values////////////////
      this.amountgrph= 0;
      this.totalgrph = 0;
      for (let index = 1; index < 13; index++) {
        this.feesarray[index] = 0;
        this.salaryarray[index] = 0;
      
     }

     this.paymentService.viewpay()
    .subscribe((data: CreateStudent[])=>{
      this.feespayments = data;
      for (let index = 0; index < this.feespayments.length; index++) {
        
        if(this.feespayments[index].year == this.value){
          this.amountgrph = parseInt(this.feespayments[index].amount);
          if (this.feesarray[ parseInt(this.feespayments[index].month)] == null) {
            this.feesarray[ parseInt(this.feespayments[index].month)] =this.amountgrph;
          }

          else{
            this.feesarray[ parseInt(this.feespayments[index].month)] =this.feesarray[ parseInt(this.feespayments[index].month)] + this.amountgrph;
          }
        }
      }

      for (let index = 1; index < 13; index++) {
        if (this.feesarray[index] == null) {
         this.feesarray[index] = 0;
        }
     }

      
    });
  }
      
  //delete a fees payment
  delete(payments : CreateStudent): void{
    console.log(payments.month);
    this.paymentService.deletepay(payments.Student_ID,payments.month)
      .subscribe(data => {
      this.payments = this.payments.filter(u => u !== payments);
    })
  }

  whole(){
    this.clicked = !this.clicked;
  }

  //chart info
  title = 'salary payment Details';
   type = 'LineChart';
  
   columnNames = ["Month", "Total"];
   options = {   
      hAxis: {
         title: 'Month'
      },
      vAxis:{
         title: 'Amount (Rs.)'
      },
   };
   width =1000;
   height = 1000;

}
