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

  //sign out and reach login
  signout(login){
    this.router.navigate(['/login'], login)
  }
}
