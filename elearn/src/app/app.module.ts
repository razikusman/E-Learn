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
import { AnouncementComponent } from './anouncement/anouncement.component';
import { AnouncementCreateComponent } from './anouncement-create/anouncement-create.component';
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    TopBarComponent,
    NavBarComponent,
    DialogExampleComponent,
    AnouncementComponent,
    AnouncementCreateComponent,
    
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
