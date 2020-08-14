import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public students ;
  public id ="";// store id
  
  constructor(
    private studentsservice : StudentService, 
    private subjectservice : SubjectsService

  ) { }

  ngOnInit() {

    this.id = localStorage.getItem("id");

    this.studentsservice.addstudent()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
    });  
  }

  add(student){
    console.log(student.Student_ID+"/"+student.Subject_ID);
    
     this.studentsservice.enrollstudent(student.Student_ID,student.Subject_ID)
      .subscribe(data =>console.log('success!',data))
  }

}
