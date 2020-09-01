import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { CreateTeacher } from '../create-teacher';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatequize',
  templateUrl: './updatequize.component.html',
  styleUrls: ['./updatequize.component.css']
})
export class UpdatequizeComponent implements OnInit {

  addForm : FormGroup;
  listquizes;
  quizes;
  quiz ;
  grade;
  subquizid;

  constructor(
    private quizeService : QuizService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    //view quize details
    this.quizeService.viewquizelist()
    .subscribe((data:CreateTeacher[])=>{
      this.listquizes =data;
      //console.log(this.listquizes);
      for (let index = 0; index < this.listquizes.length; index++) {
         this.quiz = -index;
      }
      
    });

    this.addForm = this.formBuilder.group({
      sdate: [],
      edate:[],
    });

  }

  edit(listquizes : CreateTeacher){
    //console.log(listquizes.quizzid)
    this.quiz = !this.quiz;

    this.quizeService.viewquizelist()
     .subscribe((data : CreateTeacher[]) => {
      this.quizes = data 
      for (let index = 0; index < this.quizes.length; index++) {
      if ((this.quizes[index].quizzid == listquizes.quizzid ) && (this.quizes[index].grade == listquizes.grade )) {
          this.quiz = index + 1;
        //rest api 
        this.addForm = this.formBuilder.group({
          sdate:  [this.quizes[index].sdate],
          edate:  [this.quizes[index].edate],    
          quizzid:[this.quizes[index].quizzid],
          subid:  [this.quizes[index].subid],
          grade:  [this.quizes[index].grade],
        });
      };
         
      }
     });
  }

  save(listquizes : CreateTeacher){
    this.quiz = -this.quiz;
     this.quizeService.updatequize(this.addForm.value)
    .subscribe(data =>console.log('success!',data));
    
    console.log(this.addForm.value);
  }

}
