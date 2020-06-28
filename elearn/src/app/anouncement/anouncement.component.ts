import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anouncement',
  templateUrl: './anouncement.component.html',
  styleUrls: ['./anouncement.component.css']
})
export class AnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ads = [
    {
      h1:"klsjdl"
    },

    {
      h1:"ppppl"
    }
  ];
}
