import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnouncementService } from '../anouncement.service';

@Component({
  selector: 'app-anouncement-create',
  templateUrl: './anouncement-create.component.html',
  styleUrls: ['./anouncement-create.component.css']
})
export class AnouncementCreateComponent implements OnInit {

  constructor(
    private http: HttpClientModule,
    private route: Router,
    private formBuilder : FormBuilder,
    private anouncementservice : AnouncementService
  ) { }

  anouncement: FormGroup;

  ngOnInit() {
    //rest api
    this.anouncement = this.formBuilder.group({
      Heading1 : [null],
      Heading2 : [null],
      content :[null]
    })

  }

  onSubmit(){
    this.anouncementservice.createanouncemnt(this.anouncement.value)
    .subscribe(data =>console.log('success!',data));

    this.route.navigate(["/anouncements/view"]);
  }
}
