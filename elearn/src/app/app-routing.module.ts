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
import { StudenDetailsComponent } from './studen-details/studen-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { SubjectsDetailsComponent } from './subjects-details/subjects-details.component';
import { AboutComponent } from './about/about.component';
import { QuizeComponent } from './quize/quize.component';
import { OverallReportComponent } from './overall-report/overall-report.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { SalaryPaymentComponent } from './salary-payment/salary-payment.component';
import { FeesPaymentComponent } from './fees-payment/fees-payment.component';
import { AnouncementComponent } from './anouncement/anouncement.component';
import { AnouncementCreateComponent } from './anouncement-create/anouncement-create.component';
import { ViewAnouncementComponent } from './view-anouncement/view-anouncement.component';

//path for the url
const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'create', component:CreteComponent},
  {path:'studentcreate', component:StdntcreteComponent},
  {path:'teachercreate', component:TeachercreteComponent},
  {path:'parentcreate', component:ParentcreteComponent},
  {path:'parent/home', component:ParentHomeComponent},
  {path:'student/home', component:StdntHomeComponent},
  {path:'teacher/home', component:TeacherHomeComponent},
  {path:'admin/home', component:AdminHomeComponent},
  {path: 'student/details', component:StudenDetailsComponent},
  {path: 'teacher/details', component:TeacherDetailsComponent},
  {path: 'subjects/details', component:SubjectsDetailsComponent},
  {path: 'about', component:AboutComponent},
  {path:'quize', component:QuizeComponent},
  {path: 'overall/report', component:OverallReportComponent},
  {path: 'student/progres', component:StudentProgressComponent},
  {path: 'salary/payment', component:SalaryPaymentComponent},
  {path: 'fees/payment', component:FeesPaymentComponent},
  {path: 'anouncements', component: ViewAnouncementComponent},
  {path: 'create/anouncement', component: AnouncementCreateComponent},
  {path: 'anouncement', component:AnouncementComponent}
  
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
                                  StudenDetailsComponent,
                                  TeacherDetailsComponent,
                                  SubjectsDetailsComponent,
                                  AboutComponent,
                                  QuizeComponent,
                                  OverallReportComponent,
                                  StudentProgressComponent,
                                  SalaryPaymentComponent,
                                  FeesPaymentComponent,
                                  ViewAnouncementComponent,
                                  AnouncementCreateComponent,
                                  AnouncementComponent
                                ]
 
