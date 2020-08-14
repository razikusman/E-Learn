import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
@Component({
  selector: 'app-stdntcrete',
  templateUrl: './stdntcrete.component.html',
  styleUrls: ['./stdntcrete.component.css']
})
export class StdntcreteComponent implements OnInit {

  subjects: SubjectCreate[]; //subjects array

  constructor(
    private route:Router,
    private studenttService: StudentService,
    private subjectservice : SubjectsService,
    private formBuilder : FormBuilder) { }

  addForm: FormGroup;
  sub: FormGroup;
 

  ngOnInit() {

    //get subjects list
    this.subjectservice.viewsubjects()
     .subscribe((data : SubjectCreate[]) => {
       this.subjects = data 
     });

    console.log(this.subjects);
    //rest api
    this.addForm = this.formBuilder.group({
      name: [null],
      gender:[null],
      grad : [null],
      DOB : [null],
      pContact : [null],
      user: ['Student'],
      gurdname : [null],
      gurdNIC : [null],
      userid : [null],
      password : [null],
      cpassword : [null],
      // subject : [""]
      
      // subjects : this.sub = this.formBuilder.group({
        
      //  }),
    });

  }

  //insert in to database
  onSubmit(){
     console.log(this.addForm.value);
     this.studenttService.createstudent(this.addForm.value) //studentservice==>create student
     .subscribe(data =>console.log('success!',data));

  };

  //gradearray
  grades = ['grade','6','7','8','9','10','11'];
  

  //change user type
  change(create){
    this.route.navigate(['/create'],create);
  }

}
