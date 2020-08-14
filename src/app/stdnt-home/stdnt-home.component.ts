import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
import {  FormGroup } from '@angular/forms';
import* as fileSaver from 'file-saver';
import { QuizService } from '../quiz.service';
import { CreateTeacher } from '../create-teacher';


@Component({
  selector: 'app-stdnt-home',
  templateUrl: './stdnt-home.component.html',
  styleUrls: ['./stdnt-home.component.css']
})
export class StdntHomeComponent implements OnInit {

  subjects ;//variable to store subject details
  materials ;//variable to store subject materials details
  users : Login[]; // store user data
  public id ="";// store id
  public sid : ""; //sore subject id
  access ; //sore subject detais of allowed
  listquizes : CreateTeacher[];

  constructor(
    private router: Router,
    private loginservice : LoginServiceService,
    private subjectservice: SubjectsService,
    private quizeSrvice : QuizService
  ) { }

  add: FormGroup;
  
  ngOnInit() {
    //console.log(this.loginservice.getog());
    this.id = localStorage.getItem("id");
    this.loginservice.user_student()
    .subscribe((data : Login[] ) => {
      this.users = data; //user store the data from user table
      
      console.log(this.users);
    });

    //console.log(this.subjectservice.viewsubjects());
    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    });//subject details


    //view quize details
    this.quizeSrvice.viewquizelist()
    .subscribe((data:CreateTeacher[])=>{
      this.listquizes =data;
      console.log(this.listquizes);
      
    });

    this.subjectservice.viewsubjectspermision()
    .subscribe((data:SubjectCreate[])=>{
      this.access =data;
    });

  }
  
  //sign out and reach login
  signout(login){
    
    this.router.navigate(['/login'], login)
  };

  //update profile
  update(profile){
    this.router.navigate(['/login'], profile)
  }

  download(){
    this.subjectservice.viewmaterials().subscribe(response => {
			let blob:any = new Blob([response]);
			const url = window.URL.createObjectURL(blob);
			//window.open(url);{ type: 'text/json; charset=utf-8' }
			//window.location.href = response.url;'employees.json'
			fileSaver.saveAs(blob);
		})
  }

  //quize
  quize(listquizes : CreateTeacher){


  }
}