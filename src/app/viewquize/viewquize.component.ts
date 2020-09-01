import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { CreateTeacher } from '../create-teacher';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewquize',
  templateUrl: './viewquize.component.html',
  styleUrls: ['./viewquize.component.css']
})
export class ViewquizeComponent implements OnInit {

  public quizes : CreateTeacher[];
  public qid;
  public subid;
  public listquizes;
  addForm: FormGroup;

  constructor(
    private quizeSrvice : QuizService,
    private formBuilder : FormBuilder,) { }

  ngOnInit() {

    this.qid = sessionStorage.getItem("quizeid");
    this.subid = sessionStorage.getItem("subid");
    console.log(this.subid);
     //view quize details
     this.quizeSrvice.viewquize()
     .subscribe((data:CreateTeacher[])=>{
       this.quizes =data;
       console.log(this.quizes);
     });

     //view quize details
    this.quizeSrvice.viewquizelist()
    .subscribe((data:CreateTeacher[])=>{
      this.listquizes =data;
      console.log(this.listquizes);
      
    });


    this.addForm = this.formBuilder.group({
      1 : [null],
      2 : [null],
      3 : [null],
      4 : [null],
      5 : [null],
      6 : [null],
      7 : [null],
      8 : [null],
      9 : [null],
      10 : [null],

    });
  }

  onSubmit(){
    console.log(this.addForm);
    // this.quizService.addquize(this.addForm.value) //studentservice==>create student
    // .subscribe(data =>console.log('success!',data));

 };

}
