import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatDialogModule 
} from '@angular/material';

const MaterialComponent = [
  MatButtonModule,
  MatDialogModule
] ;

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialsModule { }
