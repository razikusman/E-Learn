import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { CreateTeacher } from '../create-teacher';

@Component({
  selector: 'app-viewquize',
  templateUrl: './viewquize.component.html',
  styleUrls: ['./viewquize.component.css']
})
export class ViewquizeComponent implements OnInit {

  quize : CreateTeacher[];

  constructor(private quizeSrvice : QuizService) { }

  ngOnInit() {
     //view quize details
     this.quizeSrvice.viewquize()
     .subscribe((data:CreateTeacher[])=>{
       this.quize =data;
       console.log(this.quize);
       
     });
  }

}
