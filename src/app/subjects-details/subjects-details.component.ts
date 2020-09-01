import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-subjects-details',
  templateUrl: './subjects-details.component.html',
  styleUrls: ['./subjects-details.component.css']
})
export class SubjectsDetailsComponent implements OnInit {

  subjects;//variable to store subject details
  subjcts;//variable to store subject details
  pays;//variable to store subject teacher paymnt details
  show = false;//show subjects bool
  changeclicked = false ;//show/hide salary change form
  sid;//store subjectid
  grade;
  addForm : FormGroup;

  constructor(
    private subjectservice: SubjectsService,
    private route : Router,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    });//subject details

    this.subjectservice.viewallsubjects()
     .subscribe((data : SubjectCreate[]) => {
       this.subjcts = data 
     });//all subjct details

    this.subjectservice.viewpaysubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.pays = data
    });//subject pay details

    //payment formbulider
    this.addForm = this.formBuilder.group({
      amount: [],
      id:  [],
      Grade:  [],
    });
  }

  //delete a subject
  delete(subjects : SubjectCreate): void{
    console.log(subjects.Sub_ID);
    this.subjectservice.deleteubjects(subjects.Sub_ID)
    .subscribe(data => {
      this.subjects = this.subjects.filter((u: any) => u !== this.subjects);
    }) // pass to subject service

    //window.location.reload();
  }

  //update a subject data 
  Updatedata(subjects : SubjectCreate,index): void{
    //payment formbulider
    this.addForm = this.formBuilder.group({
      amount: [subjects.amount],
      id:  [subjects.Sub_ID],
      Grade:  [subjects.Grade],
      NIC : [subjects.NIC]
      
    });
    this.changeclicked = !this.changeclicked;
    this.sid = subjects.Sub_ID;
    this.grade = subjects.Grade;
  }

  //add subjects
  add_subject(){
    this.route.navigate(['add/subject']); //navigate subject create form
  }

  //save changed salary
  onSubmit(){
    this.subjectservice.updatepaysubjects(this.addForm.value)
    .subscribe(data =>console.log('success!',data)); //pass data to teacher service
    this.changeclicked = !this.changeclicked;
    window.location.reload();
  }
 
  // subject details
  paymentdetails(){
    this.show =!this.show;
  }
}
