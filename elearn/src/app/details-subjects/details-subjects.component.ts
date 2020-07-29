import { Component, OnInit } from '@angular/core';
import { SubjectCreate } from '../create-subject';
import { SubjectsService } from '../subjects.service';
import { TeacherService } from '../teacher.service';
import { CreateTeacher } from '../create-teacher';

@Component({
  selector: 'app-details-subjects',
  templateUrl: './details-subjects.component.html',
  styleUrls: ['./details-subjects.component.css']
})
export class DetailsSubjectsComponent implements OnInit {

  
  public teachers : CreateTeacher[]; //variable to store teacher details
  public subjects ; //variable to store suject details
  public subjectsteaching; //variable to store suject teaching details
  public id = ""; //variable to store id
  public file : File = null; //variable to store files
  constructor(
    private subjectservice: SubjectsService, //subject service
    private teacherservice : TeacherService, //teacher service component
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem("id"); // user id

    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    }); //subject details

    this.subjectservice.viewsubjectsteaching()
    .subscribe((data: SubjectCreate[])=>{
      this.subjectsteaching = data
    }); //subjectteaching details

    this.teacherservice.viewteacher()
    .subscribe((data:CreateTeacher[])=>{
      this.teachers =data;
      console.log(this.teachers);
    });//teacher details

  }

  //add materials
  add(event){
    this.file = event.target.files[0];
  }

  //u[load the material
  upload(){

  }
  //gradearray
  grades = ['grade','6','7','8','9','10','11'];

}
