import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubjectsService } from '../subjects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {

  addForm: FormGroup;
  constructor(
    private formBuilder :FormBuilder,
    private subjectservice : SubjectsService,
    private router : Router
  ) { }

  ngOnInit() {

    //rest api
    this.addForm = this.formBuilder.group({
      name: [null],
      id: [null],
    });
  }

  //insert in to database
  onSubmit(){
    console.log(this.addForm.value);
    this.subjectservice.addsubjects(this.addForm.value)
    .subscribe(data =>console.log('success!',data));
    this.router.navigate(["subjects/details"]);
  }
}
