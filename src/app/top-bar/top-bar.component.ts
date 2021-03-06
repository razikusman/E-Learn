import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //sign out 
  signout(signout){
    this.router.navigate(['/login'], signout);
    localStorage.clear;
  }
}
