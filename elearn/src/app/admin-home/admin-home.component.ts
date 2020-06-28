import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor( 
    private router: Router,
    private login : LoginServiceService) { }

  ngOnInit() {
  }

  public name="Usman";
  public  detailname="";

  studetails(){
    return this.name="student details";
  }

  tchrdetails(){
    return this.detailname="Teacher details";
  }

  subdetails(){
    return this.detailname="Subject details";
  }

  signout(login){
    this.router.navigate(['/login'], login)
  }

  salarypayment(salary){
    this.router.navigate(['/salary/payment'], salary)
  }
  feespayment(fees){
    this.router.navigate(['/fees/payment'], fees)
  }
  overallreport(overall){
    this.router.navigate(['/overall/report'], overall)
  }

  add(anouncement){
    this.router.navigate(['/anouncements/view'], anouncement)
  }

}
