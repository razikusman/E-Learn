import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudenDetailsComponent } from './studen-details/studen-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { SubjectsDetailsComponent } from './subjects-details/subjects-details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    StudenDetailsComponent,
    TeacherDetailsComponent,
    SubjectsDetailsComponent,
    AboutComponent,
    
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
