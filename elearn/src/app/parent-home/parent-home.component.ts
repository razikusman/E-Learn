import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  name="parent";

  signout(login){
    this.router.navigate(['/login'], login)
  }

}
