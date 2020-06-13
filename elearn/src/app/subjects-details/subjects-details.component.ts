import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../subject-create';

@Component({
  selector: 'app-subjects-details',
  templateUrl: './subjects-details.component.html',
  styleUrls: ['./subjects-details.component.css']
})
export class SubjectsDetailsComponent implements OnInit {

  subjects : SubjectCreate[]
  constructor(
    private subjectservice: SubjectsService,
  ) { }

  ngOnInit() {
    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    });
  }

}
