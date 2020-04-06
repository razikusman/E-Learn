import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stdntcrete',
  templateUrl: './stdntcrete.component.html',
  styleUrls: ['./stdntcrete.component.css']
})
export class StdntcreteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  grades = ['6','7','8','9','10','11'];
  subjects:Array<String>=[
    "english","second language tamil","tamil(first language)","maths","science","second language sinhala",
  ];

}
