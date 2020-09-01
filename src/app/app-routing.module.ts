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
import { DetailsTeachersComponent } from './details-teachers/details-teachers.component';
import { DetailsSubjectsComponent } from './details-subjects/details-subjects.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentEvaluateComponent } from './student-evaluate/student-evaluate.component';
import { TeachersalaryComponent } from './teachersalary/teachersalary.component';
import { UpdatequizeComponent } from './updatequize/updatequize.component';
import { ViewquizeComponent } from './viewquize/viewquize.component';
import { AtendenceComponent } from './atendence/atendence.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateParentComponent } from './update-parent/update-parent.component';
import { EvalutionCriteriaComponent } from './evalution-criteria/evalution-criteria.component';

//path for the url
const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'create', component:CreteComponent},
  {path:'student/create', component:StdntcreteComponent},
  {path:'teacher/create', component:TeachercreteComponent},
  {path:'parent/create', component:ParentcreteComponent},
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
  {path: 'salary/payment/report', component:SalaryPaymentComponent},
  {path: 'fees/payment', component:FeesPaymentComponent},
  {path: 'student/evaluate', component:StudentEvaluateComponent},
  {path: 'anouncements/view', component: ViewAnouncementComponent},
  {path: 'create/anouncement', component: AnouncementCreateComponent},
  {path: 'anouncement', component:AnouncementComponent},
  {path: 'details/student', component: DetailsStudentComponent},
  {path: 'details/subjects', component: DetailsSubjectsComponent},
  {path: 'details/teacher', component: DetailsTeachersComponent},
  {path: 'add/subject', component: SubjectCreateComponent},
  {path: 'add/student', component: AddStudentComponent},
  {path: 'salary/payment', component: TeachersalaryComponent},
  {path: 'quize/update', component: UpdatequizeComponent},
  {path: 'quize/atempt', component: ViewquizeComponent},
  {path: 'atendence/student', component: AtendenceComponent},
  {path: 'update/teacher', component: UpdateTeacherComponent},
  {path: 'update/parent', component:UpdateParentComponent},
  {path: 'atendence/student', component: EvalutionCriteriaComponent},
  {path: 'update/student', component: UpdateStudentComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
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
                                  AnouncementComponent,
                                  DetailsStudentComponent,
                                  DetailsSubjectsComponent,
                                  DetailsTeachersComponent,
                                  SubjectCreateComponent,
                                  AddStudentComponent,
                                  StudentEvaluateComponent,
                                  TeachersalaryComponent,
                                  UpdatequizeComponent,
                                  ViewquizeComponent,
                                  AtendenceComponent,
                                  UpdateTeacherComponent,
                                  UpdateStudentComponent,
                                  EvalutionCriteriaComponent,
                                  UpdateParentComponent
                                ]

