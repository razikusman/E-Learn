import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../teacher.service';
import { CreateTeacher} from '../create-teacher';

@Component({
  selector: 'app-teachercrete',
  templateUrl: './teachercrete.component.html',
  styleUrls: ['./teachercrete.component.css']
})
export class TeachercreteComponent implements OnInit {

  constructor( 
    private route:Router,
    private teachertService: TeacherService,
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
      userid : [null],
      password :[null],
      cpassword :[null],
    });
  }

  onSubmit(){
    console.log(this.addForm.value);
    this.teachertService.CreateTeacher(this.addForm.value)
    .subscribe(data =>console.log('success!',data));
  };

  subjects = ['english','maths','science','second_language_sinhala','second_language_tamil','tamil_first_language'];

  change(create){
    this.route.navigate(['/create'],create);
  }

}
