import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdntcrete',
  templateUrl: './stdntcrete.component.html',
  styleUrls: ['./stdntcrete.component.css']
})
export class StdntcreteComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  grades = ['grade','6','7','8','9','10','11'];
  subjects:Array<String>=[
    "english","second language tamil","tamil(first language)","maths","science","second language sinhala",
  ];

  change(create){
    this.route.navigate(['/create'],create);
  }

}
