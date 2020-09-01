import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';
import { SubjectsService } from '../subjects.service';
import { QuizService } from '../quiz.service';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  addForm: FormGroup;
  public id ="";// store id
  users : Login[]; // store user data
  student;

  constructor(
    private router: Router,
    private studentservice: StudentService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem("id");

    this.studentservice.viewstudent()
     .subscribe((data : CreateStudent[]) => {
      this.student = data 
      console.log(this.student);
      for (let index = 0; index < this.student.length; index++) {
      if (this.student[index].Student_ID == this.id) {
          //rest api
        this.addForm = this.formBuilder.group({
          name: [this.student[index].Name],
          contact:[this.student[index].Contact],
          gender : [this.student[index].Gender],
          grad: [this.student[index].grade],
          pContact:[this.student[index].Contact],
          gurdname : [this.student[index].Parent_Name],
          gurdNIC: [this.student[index].Parent_NIC],
        });
      };  
      }
      
     });
  }

}