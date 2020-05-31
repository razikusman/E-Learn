import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { CreateParent } from '../create-parent'

@Component({
  selector: 'app-stdntcrete',
  templateUrl: './stdntcrete.component.html',
  styleUrls: ['./stdntcrete.component.css']
})
export class StdntcreteComponent implements OnInit {

  constructor(
    private route:Router,
    private studenttService: StudentService,
    private formBuilder : FormBuilder) { }

  addForm: FormGroup;
  sub: FormGroup;
  parent : CreateParent[];

  ngOnInit() {

    //rest api
    this.addForm = this.formBuilder.group({
      name: [null],
      grad : [null],
      DOB : [null],
      pContact : [null],
      user: ['Student'],
      gurdname : [null],
      gurdNIC : [null],
      userid : [null],
      //subjects : [null],
      subjects : this.sub = this.formBuilder.group({
        english: [null],
        maths: [null],
        science: [null],
        second_language_sinhala: [null],
        second_language_tamil: [null],
        tamil_first_language_: [null],
       }),
      password : [null],
      cpassword : [null],
    });
  }

  //insert in to database
  onSubmit(){
    console.log(this.addForm.value);
    this.studenttService.createstudent(this.addForm.value)
    .subscribe(data =>console.log('success!',data));
  };

  //gradearray
  grades = ['grade','6','7','8','9','10','11'];

  //subject array
  subjects:Array<String>=[
    "english","maths","science","second_language_sinhala","second_language_tamil","tamil_first_language_"
  ];

  //change user type
  change(create){
    this.route.navigate(['/create'],create);
  }

}
