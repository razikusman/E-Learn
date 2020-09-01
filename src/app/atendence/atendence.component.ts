import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { SubjectCreate } from '../create-subject';
import { StudentService } from '../student.service';
import { CreateStudent } from '../create-student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atendence',
  templateUrl: './atendence.component.html',
  styleUrls: ['./atendence.component.css']
})
export class AtendenceComponent implements OnInit {

  public myDate: number = Date.now();//todays date
  subjects ;//variable to store subject details
  students;//variable to store student details
  selectGrade = "all";//variable for storing grde from dropdown
  selectSubject = "all";//variable for storing subject from dropdown
  addForm: FormGroup;
  count = 0;
  subject;
  id;
  curyear = new Date().getFullYear().toString();//get current  year
  curmonth = (new Date().getMonth() + 1).toString();//get current month 
  curdate = (new Date().getDate() + 1).toString() + '-'+(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();//current ddate

  d1 = true;

  constructor(
    private subjectservice: SubjectsService,
    private studentsservicce: StudentService,
    private formBuilder : FormBuilder
  ) { }
  

  ngOnInit() {
    //console.log(this.subjectservice.viewsubjects());
    this.subjectservice.viewsubjects()
    .subscribe((data: SubjectCreate[])=>{
      this.subjects = data
      console.log(this.subjects)
    });//subject details

    
    //view student details
    this.studentsservicce. viewstudentcard()
    .subscribe((data:CreateStudent[])=>{
      this.students =data;
      console.log(this.students);
    });

    this.addForm = this.formBuilder.group({
      subject : [this.subject],
      paid : [null],
      not : [null],
      datetoday : [this.curdate],
      yeartoday :[this.curyear],
      monthtoday :[this.curmonth],
      atendance : [this.count],
      id : [this.id]
    })
  }

  //gradearray
  grades = ['6','7','8','9','10','11'];

  public onGradeSelected(event) {
    this.selectGrade = event.target.value;//getdrop down list value
    console.log(this.selectGrade)
  }

  public onSubjectSelected(event) {
    this.selectSubject = event.target.value;//getdrop down list value
    console.log(this.selectSubject)
  }

 
  mark(students : CreateStudent ): void{

    this.addForm = this.formBuilder.group({
      subject : [students.Subjectid],
      paid : [null],
      not : [null],
      datetoday : [this.curdate],
      yeartoday :[this.curyear],
      monthtoday :[this.curmonth],
      atendance : [parseInt(students.atendance) + 1],
      id : [students.Student_ID]
    })

    this.studentsservicce.markstudentcard(this.addForm.value)
    .subscribe(data => {
      console.log(this.students);
    })
    console.log(this.addForm.value);
  }

}