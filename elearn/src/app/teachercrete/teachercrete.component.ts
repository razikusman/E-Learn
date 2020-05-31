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
    private studenttService: TeacherService,
    private formBuilder : FormBuilder) { }

    addForm : FormGroup;
    teacher : CreateTeacher;

  ngOnInit() {
  }

  subjects:Array<String>=[
    "english","second language tamil","tamil(first language)","maths","science","second language sinhala",
  ];

  change(create){
    this.route.navigate(['/create'],create);
  }

}
