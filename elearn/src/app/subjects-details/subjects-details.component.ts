import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../subject-create';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-details',
  templateUrl: './subjects-details.component.html',
  styleUrls: ['./subjects-details.component.css']
})
export class SubjectsDetailsComponent implements OnInit {

  subjects : SubjectCreate[]
  constructor(
    private subjectservice: SubjectsService,
    private route : Router
  ) { }

  ngOnInit() {
    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    });
  }
  delete(subjects : SubjectCreate): void{
    console.log(subjects.Sub_ID);
    this.subjectservice.deleteubjects(subjects.Sub_ID)
    .subscribe(data => {
      this.subjects = this.subjects.filter(u => u !== subjects);
    })
  }

  add_subject(add){
    this.route.navigate(['add/subject'],add);
  }

}
