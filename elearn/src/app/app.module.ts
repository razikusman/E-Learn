import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuizeComponent } from './quize/quize.component';
import { OverallReportComponent } from './overall-report/overall-report.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { SalaryPaymentComponent } from './salary-payment/salary-payment.component';
import { FeesPaymentComponent } from './fees-payment/fees-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    QuizeComponent,
    OverallReportComponent,
    StudentProgressComponent,
    SalaryPaymentComponent,
    FeesPaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
