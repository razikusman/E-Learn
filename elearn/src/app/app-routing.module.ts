import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StdntcreteComponent } from './stdntcrete/stdntcrete.component';
import { TeachercreteComponent } from './teachercrete/teachercrete.component';
import { CreteComponent } from './crete/crete.component';
import { LoginComponent } from './login/login.component';
import { ParentcreteComponent } from './parentcrete/parentcrete.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { StdntHomeComponent } from './stdnt-home/stdnt-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

//path for the url
const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'crete', component:CreteComponent},
  {path:'stdntcrete', component:StdntcreteComponent},
  {path:'teachercrete', component:TeachercreteComponent},
  {path:'parentcrete', component:ParentcreteComponent},
  {path:'parent-home', component:ParentHomeComponent},
  {path:'stdnt-home', component:StdntHomeComponent},
  {path:'teacher-home', component:TeacherHomeComponent},
  {path:'admin-home', component:AdminHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{} 
//export components to the appcomponent
export const RoutingComponents= [ 
                                  LoginComponent,
                                  StdntcreteComponent,
                                  TeachercreteComponent,
                                  ParentcreteComponent,
                                  CreteComponent,
                                  ParentHomeComponent,
                                  StdntHomeComponent,
                                  TeacherHomeComponent,
                                  AdminHomeComponent,
                                ]
 
