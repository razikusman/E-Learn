import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  students : CreateStudent[];
  id;
  
  constructor(
    private studentsservicce : StudentService,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem("id"); // user id

    this.studentsservicce.myviewstudent()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
      console.log( this.students)
    });  
  }

  //add student to the subject
  addstudent(){
    this.router.navigateByUrl("add/student")
  }

}
