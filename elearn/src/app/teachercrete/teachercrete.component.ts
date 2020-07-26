import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../teacher.service';
import { CreateTeacher} from '../create-teacher';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';

@Component({
  selector: 'app-teachercrete',
  templateUrl: './teachercrete.component.html',
  styleUrls: ['./teachercrete.component.css']
})
export class TeachercreteComponent implements OnInit {
  subjects: SubjectCreate[]; //subjects array

  constructor( 
    private route:Router, //router SubjectsService 
    private teachertService: TeacherService, //teacher service
    private subjectservice : SubjectsService, //subject service
    private formBuilder : FormBuilder) { }

    addForm : FormGroup;
    sub : FormGroup;
    teacher : CreateTeacher;

  ngOnInit() {

    //rest api
    this.addForm = this.formBuilder.group({
      name: [null],
      contact:[null],
      user :['Teacher'],
      gender : [null],
      sub : [null],
      qualification : [null],
      userid : [null],
      password :[null],
      cpassword :[null],
    });


    //get subjects list
    this.subjectservice.viewsubjects()
     .subscribe((data : SubjectCreate[]) => {
       this.subjects = data 
     });
  }

  onSubmit(){
    //create teacher
    //console.log(this.addForm.value);
    this.teachertService.CreateTeacher(this.addForm.value)
    .subscribe(data =>console.log('success!',data)); //pass data to teacher service
    this.route.navigate(['teacher/home']);
  };

  //reddirect to previouse page
  change(create){
    this.route.navigate(['/create'],create);
  }

}
