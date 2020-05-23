import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachercrete',
  templateUrl: './teachercrete.component.html',
  styleUrls: ['./teachercrete.component.css']
})
export class TeachercreteComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  subjects:Array<String>=[
    "english","second language tamil","tamil(first language)","maths","science","second language sinhala",
  ];

  change(create){
    this.route.navigate(['/create'],create);
  }

}
