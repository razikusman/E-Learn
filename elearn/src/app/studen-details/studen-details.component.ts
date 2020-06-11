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

    //view student details
    this.studentsservicce.viewstudent()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
      //console.log(this.students);
    });
  }

  select(six){
    for(let i=0 ; i<this.students.length ; i++){
      if(this.students[i].grad==6){
        this.studentsservicce.viewstudent()
        .subscribe((data:CreateStudent[])=>{
          this.students = data;
        });
      }
    }
  }
  //delete student
  delete(students : CreateStudent): void{
    console.log(students.Student_ID);
    this.studentsservicce.deletestudent(students.Student_ID)
    .subscribe(data => {
      this.students = this.students.filter(u => u !== students);
    })
  }

  
}
