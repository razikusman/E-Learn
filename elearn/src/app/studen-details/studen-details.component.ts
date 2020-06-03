import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';

@Component({
  selector: 'app-studen-details',
  templateUrl: './studen-details.component.html',
  styleUrls: ['./studen-details.component.css']
})
export class StudenDetailsComponent implements OnInit {

  students: CreateStudent[];
  constructor(
     private studentsservicce: StudentService,
     ) { }

  ngOnInit() {
    this.studentsservicce.viewstudent()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
      console.log(this.students);
    });
  }

  delete(students : CreateStudent): void{
    console.log(students.userid);
    this.studentsservicce.deletestudent(students.userid)
    .subscribe(data => {
      this.students = this.students.filter(u => u !== students);
      
    })
  }

}
