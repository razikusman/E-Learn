import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anouncement } from './anouncement';

@Injectable({
  providedIn: 'root'
})
export class AnouncementService {

  constructor(private http : HttpClient) { }

  //crete anouncement
  createanouncemnt(anouncement : Anouncement ){
    return this.http.post<any>('http://localhost/elearn/addanouncemnt.php', anouncement); 
  }

  //view anouncement
  viewanouncemnt(){
    return this.http.get<any>('http://localhost/elearn/viewanouncent.php');
  }

  //delete anouncemnt
  deleteanouncemnt(id : number) {
    return this.http.delete<Anouncement[]>('http://localhost/elearn/anouncementdelete.php?id=' + id);
  }
}
