import { Component, OnInit } from '@angular/core';
import { SubjectCreate } from '../create-subject';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-details-subjects',
  templateUrl: './details-subjects.component.html',
  styleUrls: ['./details-subjects.component.css']
})
export class DetailsSubjectsComponent implements OnInit {

  public subjects ; //variable to store suject details
  public subjectsteaching; //variable to store suject teaching details
  public id = ""; //variable to store id
  
  constructor(
    private subjectservice: SubjectsService,
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem("id"); // user id

    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
    }); //subject details

    this.subjectservice.viewsubjectsteaching()
    .subscribe((data: SubjectCreate[])=>{
      this.subjectsteaching = data
    }); //subjectteaching details

  }

}
