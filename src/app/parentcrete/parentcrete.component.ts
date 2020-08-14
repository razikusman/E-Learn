import { Component, OnInit } from '@angular/core';
import { CreateParent } from '../create-parent';
import { ParentService } from '../parent.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parentcrete',
  templateUrl: './parentcrete.component.html',
  styleUrls: ['./parentcrete.component.css']
})
export class ParentcreteComponent implements OnInit {

  constructor(
    private parentService: ParentService, 
    private route: Router,
    private formBuilder : FormBuilder ) { }

  addForm: FormGroup;
  parent : CreateParent[];

  ngOnInit() {

    //rest api
    this.addForm = this.formBuilder.group({
      name: [null],
      pContact: [null],
      user: ['Parent'],
      NIC: [null],
      password: [null],
      cpassword:[null]
    });
  }

  //insert in to database
  onSubmit(){
    console.log(this.addForm.value);
    this.parentService.createparent(this.addForm.value)
    .subscribe(data =>console.log('success!',data));

    
  }

  //change user type
  change(create){
    this.route.navigate(['/create'],create);
  }

}
