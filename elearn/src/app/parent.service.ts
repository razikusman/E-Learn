import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateParent } from './create-parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  createparent(parent : CreateParent ){
    return this.http.post<any>('http://localhost/elearn/addparent.php', parent); 
  }
}
