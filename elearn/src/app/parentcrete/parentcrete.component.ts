import { Component, OnInit } from '@angular/core';
import { CreateParent } from '../create-parent';
import { ParentService } from '../parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parentcrete',
  templateUrl: './parentcrete.component.html',
  styleUrls: ['./parentcrete.component.css']
})
export class ParentcreteComponent implements OnInit {

  constructor(private parentService: ParentService, private route: Router) { }

  parent = new CreateParent(null,null,'Parent',null,null);

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.parent);
    this.parentService.createparent(this.parent)
    .subscribe(data =>console.log('success!',data));

  }

  change(create){
    this.route.navigate(['/create'],create);
  }

}
