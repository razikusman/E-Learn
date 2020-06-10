import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-anouncement',
  templateUrl: './view-anouncement.component.html',
  styleUrls: ['./view-anouncement.component.css']
})
export class ViewAnouncementComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  cretae(anounceent){
    this.router.navigate(['create/anouncement'],anounceent)
  }
}
