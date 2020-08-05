import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateStudent } from './create-student';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  pay(details : CreateStudent){
    return this.http.post<any>('http://localhost/elearn/paymentstudent.php', details);
  }

  viewpay(){
    return this.http.get<CreateStudent[]>('http://localhost/elearn/paymentstudentview.php'); 
  }
}
