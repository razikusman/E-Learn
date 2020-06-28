import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { DetailsSubjectsComponent } from './details-subjects/details-subjects.component';
import { DetailsTeachersComponent } from './details-teachers/details-teachers.component';
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    TopBarComponent,
    NavBarComponent,
    DialogExampleComponent,
    DetailsStudentComponent,
    DetailsSubjectsComponent,
    DetailsTeachersComponent,
    
  ],
  entryComponents : [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
