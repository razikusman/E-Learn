import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';

@Component({
  selector: 'app-studen-details',
  templateUrl: './studen-details.component.html',
  styleUrls: ['./studen-details.component.css']
})
export class StudenDetailsComponent implements OnInit {

  public nam = "0";
  public no = "0";
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

  //delete student
  delete(students : CreateStudent): void{
    console.log(students.Student_ID);
    this.studentsservicce.deletestudent(students.Student_ID)
    .subscribe(data => {
      this.students = this.students.filter(u => u !== students);
    })
  }

  
}
