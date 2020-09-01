import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubjectsService } from '../subjects.service';
import { Router } from '@angular/router';
import { SubjectCreate } from '../create-subject';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {

  addForm: FormGroup;
  subjects;
  
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

    //get subjects list
    this.subjectservice.viewallsubjects()
     .subscribe((data : SubjectCreate[]) => {
       this.subjects = data 
     });
  }

  //insert in to database
  onSubmit(){
    console.log(this.addForm.value);
    this.subjectservice.addsubjects(this.addForm.value)
    .subscribe(data =>console.log('success!',data));
    this.router.navigate(["subjects/details"]);

    //window.location.reload();
  }
}
