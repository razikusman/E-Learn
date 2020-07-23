import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-report',
  templateUrl: './overall-report.component.html',
  styleUrls: ['./overall-report.component.css']
})
export class OverallReportComponent implements OnInit {

  myDate: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
