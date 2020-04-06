import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-crete',
  templateUrl: './crete.component.html',
  styleUrls: ['./crete.component.css']
})
export class CreteComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  //direct to stuent signup form
  student(stdntcrete){
    this.router.navigate(['/stdntcrete'], stdntcrete);
  }

  //dierct to the teacher signup form
  teacher(teachercrete){
    this.router.navigate(['/teachercrete'], teachercrete);
  }

  //direct to the parent signup form
  parent(prntcrete){
    this.router.navigate(['/parentcrete'], prntcrete);
  }

}
