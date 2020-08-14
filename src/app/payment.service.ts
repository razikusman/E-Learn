import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateStudent } from './create-student';
import { CreateTeacher } from './create-teacher';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  pay(details : CreateStudent){
    return this.http.post<any>('http://localhost/elearn/paymentstudent.php', details);
  } //student fees payment

  viewpay(){
    return this.http.get<CreateStudent[]>('http://localhost/elearn/paymentstudentview.php'); 
  }// view student fees payment

  deletepay(userid : any,date: any){
    return this.http.get<any>('http://localhost/elearn/paymentstudentdelete.php?data='+userid+date); 
  }// delete teacher salary payment

  paysalary(details : CreateTeacher){
    return this.http.post<any>('http://localhost/elearn/paymentteacher.php', details);
  } // teacher salary payment

  viewsalarypay(){
    return this.http.get<CreateTeacher[]>('http://localhost/elearn/paymentteacherview.php'); 
  }// view teacher salary payment

  deletesalarypay(userid : any,date: any){
    return this.http.get<any>('http://localhost/elearn/paymentteacherdelete.php?data='+userid+date); 
  }// delete teacher salary payment
}