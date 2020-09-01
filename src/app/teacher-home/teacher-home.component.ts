import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  users ; // store user data
  public subjects ; //variable to store suject details
  public subjectslist ; //variable to store sujects
  subjectsteaching : SubjectCreate[]; //variable to store suject teaching details
  public id = ""; //variable to store id
  public showgrade = false; //variable to store id
  addForm : FormGroup;
  subjectselec;//store selected subject
  grdeselected;//store selected grade
  has=true;//subjecthas
  
  constructor(
    private subjectservice: SubjectsService,
    private router: Router,
    private loginservice : LoginServiceService,
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit() {
    
    this.addForm = this.formBuilder.group({
      sub : [],
      grde : [],
    });

      this.id = localStorage.getItem("id");

      this.loginservice.user_teacher()
      .subscribe((data : Login[] ) => {
        this.users = data; //user store the data from user table
        console.log(this.users);
      });

      this.id = localStorage.getItem("id"); // user id

      this.subjectservice.viewallsubjects()
      .subscribe((data: SubjectCreate[])=>{
        this.subjects = data
        console.log(this.subjects)
      }); //subject details

      this.subjectservice.viewsubjectsteaching()
      .subscribe((data: SubjectCreate[])=>{
        this.subjectsteaching = data
      }); //subjectteaching details

      //get subjects list
      this.subjectservice.viewsubjects()
      .subscribe((data : SubjectCreate[]) => {
        this.subjectslist = data 
      });
      
  }

  grades = ["all",'6','7','8','9','10','11'];//grades

  add(subjectsteaching : SubjectCreate): void{
    localStorage.setItem("subid", subjectsteaching.Sub_ID);
    this.router.navigate(['/quize'])
  }

  update(){
    this.router.navigate(['/update/teacher'])
  }//update tecaher details

  updatequize(): void{
    this.router.navigate(['/quize/update']);
  }//updtae quize 

  updategrade(){
    this.showgrade = !this.showgrade;
  }//show/hide tech selection

  onGradeSelected(event){
    this.grdeselected = event.target.value;
    console.log(this.grdeselected);
  }//selectgrade

  onSubjectSelected(event){
    this.subjectselec = event.target.value;
    console.log(this.subjectselec);
  }//selectgrade

  grade(){
    this.addForm = this.formBuilder.group({
      sub : [this.subjectselec],
      grde : [this.grdeselected],
      NIC : [this.id],
    });
    this.subjectservice.addsubjectsteaching(this.addForm.value)
    .subscribe(data =>console.log('success!',data));

    window.location.reload();
  }
}