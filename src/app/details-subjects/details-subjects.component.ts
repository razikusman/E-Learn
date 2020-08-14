import { Component, OnInit } from '@angular/core';
import { SubjectCreate } from '../create-subject';
import { SubjectsService } from '../subjects.service';
import { TeacherService } from '../teacher.service';
import { CreateTeacher } from '../create-teacher';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  public type="";//conirm usertpe
  public sid : ""; //sore subject id

  
  constructor(
    private subjectservice: SubjectsService, //subject service
    private teacherservice : TeacherService, //teacher service component
    private router : Router,
    private http : HttpClient,
    private formBuilder : FormBuilder
  ) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      grad : [null],
      file : [this.file]
    });



    this.id = localStorage.getItem("id"); // user id
    this.type = localStorage.getItem("type");
    console.log(this.type);

    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    }); //subject details

    this.subjectservice.viewsubjectsteaching()
    .subscribe((data: SubjectCreate[])=>{
      this.subjectsteaching = data
      console.log(this.subjectsteaching);
    }); //subjectteaching details

    this.teacherservice.viewteacher()
    .subscribe((data:CreateTeacher[])=>{
      this.teachers =data;
      console.log(this.teachers);
      
    });//teacher details

  }

  //add materials
  add(event){
    this.file = <File>event.target.files[0];
  }

  //u[load the material
  onSubmit(){
    console.log(this.addForm.value);
    this.http.post('http://localhost/elearn/addfile.php',this.addForm.value)
    .subscribe(res => {
      console.log(res);
    });
  }
  //gradearray
  grades = ['grade','6','7','8','9','10','11'];

  url(){
    return this.router.url;
  }

  //enroll to a subject
  enroll(subject) :void{
    
    this.sid = subject.Sub_ID;
    //this.enrolstudent();
    console.log(this.id);
    this.subjectservice.enrollsubjects(subject.Sub_ID,this.id)
     .subscribe(data =>console.log('success!',data))
     //console.log(this.add.value);
    
  }

}
