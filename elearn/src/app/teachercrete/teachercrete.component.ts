import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachercrete',
  templateUrl: './teachercrete.component.html',
  styleUrls: ['./teachercrete.component.css']
})
export class TeachercreteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subjects:Array<String>=[
    "english","second language tamil","tamil(first language)","maths","science","second language sinhala",
  ];

}
