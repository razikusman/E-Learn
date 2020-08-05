import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(
    private  dialogRef:  MatDialogRef<DialogExampleComponent>, 
    @Inject(MAT_DIALOG_DATA) public  data:  any
    ) { }

  ngOnInit() {
  }
  
  public  closeMe() {
      this.dialogRef.close();
  }

}
