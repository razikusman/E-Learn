import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anouncement } from './anouncement';

@Injectable({
  providedIn: 'root'
})
export class AnouncementService {

  constructor(private http : HttpClient) { }

  createanouncemnt(anouncemnt : Anouncement ){
    return this.http.post<any>('http://localhost/elearn/addanouncemnt.php', anouncemnt); 
  }

  viewanouncemnt(){
    return this.http.get<any>('http://localhost/elearn/viewanouncemnt.php');
  }
}
