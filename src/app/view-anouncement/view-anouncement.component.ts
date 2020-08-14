import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AnouncementService } from '../anouncement.service';
import { Anouncement } from '../anouncement';

@Component({
  selector: 'app-view-anouncement',
  templateUrl: './view-anouncement.component.html',
  styleUrls: ['./view-anouncement.component.css']
})
export class ViewAnouncementComponent implements OnInit {

  anouncements : Anouncement[];
  constructor(
    private router : Router,
    private anouncementsservice : AnouncementService
  ){}

  ngOnInit() {
    this.anouncementsservice.viewanouncemnt()
    .subscribe((data:Anouncement[])=>{
      this.anouncements=data;
    });
  }

  cretae(anouncment){
    this.router.navigate(['create/anouncement'],anouncment)
  }

  delete(anouncement : Anouncement): void{
    console.log(anouncement.id);
    this.anouncementsservice.deleteanouncemnt(anouncement.id)
    .subscribe(data => {
      this.anouncements = this.anouncements.filter(u => u !== anouncement);
      
    })
  }
}
