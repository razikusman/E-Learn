import { Component, OnInit } from '@angular/core';
import { CreateParent } from '../create-parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-parentcrete',
  templateUrl: './parentcrete.component.html',
  styleUrls: ['./parentcrete.component.css']
})
export class ParentcreteComponent implements OnInit {

  constructor(private parentService: ParentService) { }

  parent = new CreateParent('',1,'Parent','','');

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.parent);
    this.parentService.createparent(this.parent)
    .subscribe(data =>console.log('success!',data))

  }

}
