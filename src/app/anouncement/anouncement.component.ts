import { Component, OnInit } from '@angular/core';
import { AnouncementService } from '../anouncement.service';
import { Anouncement } from '../anouncement';

@Component({
  selector: 'app-anouncement',
  templateUrl: './anouncement.component.html',
  styleUrls: ['./anouncement.component.css']
})
export class AnouncementComponent implements OnInit {

  ads : Anouncement[];
  constructor(
    private anouncementsservice : AnouncementService
  ) { }

  ngOnInit() {
    this.anouncementsservice.viewanouncemnt()
    .subscribe((data:Anouncement[])=>{
      this.ads=data;
    });//anouncements
  }

  
}
