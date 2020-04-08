import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdnt-home',
  templateUrl: './stdnt-home.component.html',
  styleUrls: ['./stdnt-home.component.css']
})
export class StdntHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signout(login){
    this.router.navigate(['/login'], login)
  }
}
