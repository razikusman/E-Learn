import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  students : CreateStudent[];
  constructor(
    private studentsservicce : StudentService
  ) { }

  ngOnInit() {
    this.studentsservicce.viewstudent()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
    });  
  }

}
