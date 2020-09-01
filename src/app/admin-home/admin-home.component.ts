import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public viewoverallreport = true;
  public viewfeespayment = true;
  public viewsalarypayment = true;

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
  }//view teacher salary payment
  
  feespayment(student){
    this.router.navigate(['/student/evaluate'], student)
  }//view the student payment details

  overallreport(overall){
    this.router.navigate(['/overall/report'], overall)
  }//view the overall report

  add(anouncement){
    this.router.navigate(['/anouncements/view'], anouncement)
  }//add anouncemnt


  //view and hide repors
  o_report(){
    this.viewoverallreport = !this.viewoverallreport;
    this.viewfeespayment = true;
    this.viewsalarypayment = true;
  };
  s_report(){
    this.viewoverallreport = true;
    this.viewfeespayment = true;
    this.viewsalarypayment = !this.viewsalarypayment;
  };
  m_report(){
    
    this.viewoverallreport = true;
    this.viewfeespayment = !this.viewfeespayment;
    this.viewsalarypayment = true;
  }

  //mark atemndence
  atendence(){
    this.router.navigate(["/atendence/student"])
  }

}
