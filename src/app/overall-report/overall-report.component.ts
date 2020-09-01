import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { CreateTeacher } from '../create-teacher';
import { CreateStudent } from '../create-student';
//import * as html2pdf from 'html2pdf.js'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-overall-report',
  templateUrl: './overall-report.component.html',
  styleUrls: ['./overall-report.component.css']
})
export class OverallReportComponent implements OnInit {

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
  public yeartoday;
  public value;
  public monthyesterday;
  
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


    //#############################view student feespayment details#############################//////

    this.paymentService.viewpay()
    .subscribe((data:CreateStudent[])=>{
      this.feespayments = data;
      
      /////////////////////////////store toatal in th array and calcuate total////////////////////////
      for (let index = 0; index < this.feespayments.length; index++) {
        this.amount = parseInt(this.feespayments[index].amount);

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

  onExportClick(){
    const options = {
      filename: 'OverallReport.Pdf',
      image :{type:'jpeg'},
      html2canvas :{},
      jspd :{orientation : 'Landscape'}

    };

    const constant : Element =document.getElementById('report');

    // html2pdf()
    //   .freez(Content)
    //   .set(options)
    //   .save()
  }
  ////////////////////////////////////////chart info////////////////////////////////////
  
  type = 'LineChart';

  columnNames = ["Month", "Total"];
  options1 = {   
    hAxis: {
        title: 'Month'
    },
    vAxis:{
        title: 'Amount (Rs.)'
    },
    colors:["#00ff00"]
  };

  options2 = {   
    hAxis:{ title: 'Month'},
    vAxis:{ title: 'Amount (Rs.)'},
    colors:["#ff0000"]
  };
  width =1000;
  height = 10000;

}
