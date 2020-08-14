import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.css']
})
export class QuizeComponent implements OnInit {

  addForm: FormGroup;
  public subid;
  
  constructor(
    private formBuilder : FormBuilder,
    private quizService : QuizService) { }

  //public number :number = 0;

  ngOnInit() {
    this.subid =  localStorage.getItem(this.subid); // get subject id

    this.addForm = this.formBuilder.group({
      q1 : [null],q1a1 : [null],q1a2 : [null],q1a3 : [null],q1a4 : [null],q1c : [null],
      q2 : [null],q2a1 : [null],q2a2 : [null],q2a3 : [null],q2a4 : [null],q2c : [null],
      q3 : [null],q3a1 : [null],q3a2 : [null],q3a3 : [null],q3a4 : [null],q3c : [null],
      q4 : [null],q4a1 : [null],q4a2 : [null],q4a3 : [null],q4a4 : [null],q4c : [null],
      q5 : [null],q5a1 : [null],q5a2 : [null],q5a3 : [null],q5a4 : [null],q5c : [null],
      q6 : [null],q6a1 : [null],q6a2 : [null],q6a3 : [null],q6a4 : [null],q6c : [null],
      q7 : [null],q7a1 : [null],q7a2 : [null],q7a3 : [null],q7a4 : [null],q7c : [null],
      q8 : [null],q8a1 : [null],q8a2 : [null],q8a3 : [null],q8a4 : [null],q8c : [null],
      q9 : [null],q9a1 : [null],q9a2 : [null],q9a3 : [null],q9a4 : [null],q9c : [null],
      q10: [null],q10a1 : [null],q10a2 : [null],q10a3 : [null],q10a4 : [null],q10c : [null],
      sdate : [null],
      edate : [null],
      grade : [null],
      quizenumber :[null],
      subid : [this.subid]
    });


  }

  //gradearray
  grades = ['grade','6','7','8','9','10','11'];

  //insert in to database
  onSubmit(){
    console.log(this.addForm.value);
    this.quizService.addquize(this.addForm.value) //studentservice==>create student
    .subscribe(data =>console.log('success!',data));

 };

  // addquestion(){
  //   if (this.number != 9) {
  //     this.number = this.number + 1;
      
  //   }
    
  // }

  // removequestion(){
  //   if (this.number != 1) {
  //     this.number = this.number - 1
  //   }
    
  // }
}
