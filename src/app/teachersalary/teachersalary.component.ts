import { Component, OnInit } from '@angular/core';
import { CreateTeacher } from '../create-teacher';
import { TeacherService } from '../teacher.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachersalary',
  templateUrl: './teachersalary.component.html',
  styleUrls: ['./teachersalary.component.css']
})
export class TeachersalaryComponent implements OnInit {

  teachers : CreateTeacher[];
  constructor(
    private teacherservice : TeacherService,
    private paymenttService :PaymentService,
    private router: Router,
    private formBuilder : FormBuilder
  ) { }

  addForm: FormGroup;
    curyear = new Date().getFullYear().toString();//get current  year
    curmonth = (new Date().getMonth() + 1).toString();//get current month 
    curdate = (new Date().getDate() + 1).toString() + '-'+(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();//current ddate
  

  ngOnInit() {
    this.teacherservice.viewteacher()
    .subscribe((data:CreateTeacher[])=>{
      this.teachers =data;
      //console.log(this.teachers);
    });

    this.addForm = this.formBuilder.group({
      salary : [null],
      paid : [null],
      id : [null],
      yeartoday :[this.curyear],
      monthtoday :[this.curmonth],
      datetoday :[this.curdate]
    })
    //console.log(this.curdate);
  }

  onSubmit(){
    //console.log(this.addForm.value);
    this.paymenttService.paysalary(this.addForm.value)
    .subscribe(data =>console.log('success!',data)); //paymenttService==>payt
 };

  viewreport(){
    this.router.navigate(['/salary/payment/report']);
  }

}
