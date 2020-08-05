import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-student-evaluate',
  templateUrl: './student-evaluate.component.html',
  styleUrls: ['./student-evaluate.component.css']
})
export class StudentEvaluateComponent implements OnInit {

  public nam = "0";
  public no = "0";
  students: CreateStudent[];

  constructor( 
    private studentsservicce: StudentService,
    private paymenttService :PaymentService,
    private router: Router,
    private formBuilder : FormBuilder
  ) { }

    addForm: FormGroup;
    curdate = (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();//get current month and year
    Date = (new Date().getDate() + 1).toString() + '-'+(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();//current ddate
  ngOnInit() {
    //view student details
    this.studentsservicce.viewstudent()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
      //console.log("this.students");
    });

    this.addForm = this.formBuilder.group({
      fees : [null],
      paid : [null],
      not : [null],
      id : [null],
      monthtoday :[this.curdate],
      datetoday :[this.Date]
    })
    //console.log(this.curdate);
  }

  //sort out students of all grade 
  selecta(){
    this.nam = "0";
  }

  //sort out students of grade 6
  select6(){
    this.nam = "6";
  }

  //sort out students of grade 7
  select7(){
    this.nam = "7";
  }

  //sort out students of grade 8
  select8(){
    this.nam = "8";
  }

  //sort out students of grade 9
  select9(){
    this.nam = "9";
  }

  //sort out students of grade 10
  select10(){
    this.nam = "10";
  }

  //sort out students of grade 11
  select11(six){
    this.nam = "11";
  }

  onSubmit(){
    console.log(this.addForm.value);
    this.paymenttService.pay(this.addForm.value)
    .subscribe(data =>console.log('success!',data)); //paymenttService==>payt
 };

  //evaluate student
  evaluate(){
    this.router.navigate(['/fees/payment'])
  }

}
