import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { CreateTeacher } from '../create-teacher';

@Component({
  selector: 'app-details-teachers',
  templateUrl: './details-teachers.component.html',
  styleUrls: ['./details-teachers.component.css']
})
export class DetailsTeachersComponent implements OnInit {

  teachers : CreateTeacher[];
  
  constructor(
    private teacherservice : TeacherService
    ) { }

  ngOnInit() {
    this.teacherservice.viewteacher()
    .subscribe((data:CreateTeacher[])=>{
      this.teachers =data;
      console.log(this.teachers);
    });
  }

}
