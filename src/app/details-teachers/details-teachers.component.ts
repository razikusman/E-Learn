import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { CreateTeacher } from '../create-teacher';

@Component({
  selector: 'app-details-teachers',
  templateUrl: './details-teachers.component.html',
  styleUrls: ['./details-teachers.component.css']
})
export class DetailsTeachersComponent implements OnInit {

  teachers : CreateTeacher[]; //variable to store teacher details
  
  constructor(
    private teacherservice : TeacherService, //teacher service component
    ) { }

  ngOnInit() {
    //get teacherdetails
    this.teacherservice.viewteacher()
    .subscribe((data:CreateTeacher[])=>{
      this.teachers =data;
      console.log(this.teachers);
    });
  }

}
