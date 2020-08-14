import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { CreateTeacher } from '../create-teacher';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teachers : CreateTeacher[];
  constructor(
    private teacherservice : TeacherService,
  ) { }

  ngOnInit() {
    this.teacherservice.viewteacher()
    .subscribe((data:CreateTeacher[])=>{
      this.teachers =data;
      console.log(this.teachers);
    });
  }

}
