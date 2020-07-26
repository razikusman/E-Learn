import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
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

  //delete a subject
  delete(subjects : SubjectCreate): void{
    console.log(subjects.Sub_ID);
    this.subjectservice.deleteubjects(subjects.Sub_ID)
    .subscribe(data => {
      this.subjects = this.subjects.filter(u => u !== subjects);
    }) // pass to subject service
  }

  //add subjects
  add_subject(add){
    this.route.navigate(['add/subject'],add); //navigate subject create form
  }

}
