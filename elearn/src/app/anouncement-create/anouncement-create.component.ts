import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-anouncement-create',
  templateUrl: './anouncement-create.component.html',
  styleUrls: ['./anouncement-create.component.css']
})
export class AnouncementCreateComponent implements OnInit {

  constructor(private http: HttpClientModule) { }

  ngOnInit() {
  }

  upload(anouncement){
    
  }
}
