import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { CreateTeacher } from '../create-teacher';

@Component({
  selector: 'app-salary-payment',
  templateUrl: './salary-payment.component.html',
  styleUrls: ['./salary-payment.component.css']
})
export class SalaryPaymentComponent implements OnInit {

 
  public myDate: number = Date.now();//todays date
  public payments;//variable to store payments details
  public feespayments;//variable to store feespayments details
  public amount : number = 0;//temp variable to store amount for toatal calculation
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
    ) {}

  ngOnInit() {

    for (let index = 0; index < 11; index++) {
      this.years[index] = ((new Date().getFullYear() -1 ) - index );//array of ten years from current year 
    }
    this.monthtoday = (new Date().getMonth() + 1).toString() //current month
    this.monthyesterday = (new Date().getMonth()).toString() //yesterday month
    console.log( this.monthyesterday);
    this.yeartoday = new Date().getFullYear().toString() //current year



    //#############################view ssalary payments details#############################////////
    this.paymentService.viewsalarypay()
    .subscribe((data: CreateTeacher[])=>{
      this.payments = data;
      this.slenght = parseInt(this.payments.length);

      for (let index = 0; index < this.payments.length; index++) {
        this.amount = parseInt(this.payments[index].amount);

      ///////********************************table****************************///

      ////////////////////relevent to current month///////////////////////////////
        if(this.payments[index].month== this.monthtoday && this.payments[index].year== this.yeartoday) {
          this.salarytotal = this.salarytotal + this.amount;
        }

        ////////////////////relevent to yesterday month///////////////////////////////
        if(this.payments[index].month== this.monthyesterday && this.payments[index].year== this.yeartoday) {
          this.salarytotalyesterday = this.salarytotalyesterday + this.amount;
        }

      ///////********************************graph****************************///////////////

        if(this.payments[index].year== this.yeartoday){
          if (this.salaryarray[ parseInt(this.payments[index].month)] == null) {
            this.salaryarray[ parseInt(this.payments[index].month)] =this.amount;
          }

          else{
            this.salaryarray[ parseInt(this.payments[index].month)] =this.salaryarray[ parseInt(this.payments[index].month)] + this.amount;
          }
        }
        

      }

      
      for (let index = 1; index < 13; index++) {
        if (this.salaryarray[index] == null) {
         this.salaryarray[index] = 0;//store 0 at the remaining arrays object
        }
      }
    });

    //////////////////////////array of ten years from current arrray//////////////////////////
    for (let index = 0; index < 11; index++) {
      this.years[index] = (new Date().getFullYear() - index); 
    }

  }

  


  
  /////////////////////////////////month selection and display relevent data in table//////////////////////////////////////////////
  
  
  
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

    /////////////////////////////////////
    this.paymentService.viewsalarypay()
    .subscribe((data: CreateTeacher[])=>{
      this.payments = data;
      
      for (let index = 0; index < this.payments.length; index++) {
        this.amount = parseInt(this.payments[index].amount);

      ////////////////////relevent to current month///////////////////////////////
      if(this.payments[index].month== this.monthtoday && this.payments[index].year== this.yeartoday) {
        this.salarytotal = this.salarytotal + this.amount;
      }

      ////////////////////relevent to yesterday month///////////////////////////////
      if(this.payments[index].month== this.monthyesterday && this.payments[index].year== this.yeartoday) {
        this.salarytotalyesterday = this.salarytotalyesterday + this.amount;
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
    
    /////////////////////////////////////
    this.paymentService.viewsalarypay()
    .subscribe((data: CreateTeacher[])=>{
      this.payments = data;
      for(let index = 0; index < this.payments.length; index++) {
        if(this.payments[index].year== this.value){
          this.amountgrph = parseInt(this.payments[index].amount);
          if (this.salaryarray[ parseInt(this.payments[index].month)] == null) {
            this.salaryarray[ parseInt(this.payments[index].month)] =this.amountgrph;
          }

          else{
            this.salaryarray[ parseInt(this.payments[index].month)] =this.salaryarray[ parseInt(this.payments[index].month)] + this.amountgrph;
          }
        }
      }

      for (let index = 1; index < 13; index++) {
        if (this.salaryarray[index] == null) {
         this.salaryarray[index] = 0;
        }
     }

      
    });
  }

  //delete a salary payment
  delete(payments : CreateTeacher): void{
    
    this.paymentService.deletesalarypay(payments.userid,payments.month)
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