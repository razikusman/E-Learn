import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StdntcreteComponent } from './stdntcrete/stdntcrete.component';
import { TeachercreteComponent } from './teachercrete/teachercrete.component';
import { CreteComponent } from './crete/crete.component';
import { LoginComponent } from './login/login.component';
import { ParentcreteComponent } from './parentcrete/parentcrete.component';

//path for the url
const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'crete', component:CreteComponent},
  {path:'stdntcrete', component:StdntcreteComponent},
  {path:'teachercrete', component:TeachercreteComponent},
  {path:'parentcrete', component:ParentcreteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{} 
//export components to the appcomponent
export const RoutingComponents= [ StdntcreteComponent,
                                  TeachercreteComponent,
                                  CreteComponent,
                                  LoginComponent,
                                  ParentcreteComponent
                                ]
 
