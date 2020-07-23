import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
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
 

  ngOnInit() {

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
      //subjects : [null],
      subjects : this.sub = this.formBuilder.group({
        english: ['english'],
        maths: ['maths'],
        science: ['science'],
        second_language_sinhala: ['s_l_sinhala'],
        second_language_tamil: ['s_l_tamil'],
        tamil_first_language_: ['tamil_f_l'],
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

    console.log(this.sub.value);
    this.studenttService.addsubjects(this.sub.value)
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
