import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { SubjectsService } from '../subjects.service';
import { CreateTeacher } from '../create-teacher';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  addForm : FormGroup;
  teachers;
  id;

  constructor(
     
    private route:Router, //router SubjectsService 
    private teachertService: TeacherService, //teacher service
    private subjectservice : SubjectsService, //subject service
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem("id");

    this.teachertService.viewteacher()
     .subscribe((data : CreateTeacher[]) => {
      this.teachers = data 
      for (let index = 0; index < this.teachers.length; index++) {
      if (this.teachers[index].Teacher_NIC == this.id) {
          //rest api
        this.addForm = this.formBuilder.group({
          name: [this.teachers[index].Name],
          contact:[this.teachers[index].Contact],
          gender : [this.teachers[index].Gender],
          qualification : [this.teachers[index].qualification],
          ID : [this.teachers[index].Teacher_NIC],
        });
      };
         
      }
     });
  }

  update(){
    //console.log(this.addForm.value);
    this.teachertService.updateteacher(this.addForm.value)
    .subscribe(data =>console.log('success!',data));

    this.route.navigate(['/teacher/home']);
  }

}
