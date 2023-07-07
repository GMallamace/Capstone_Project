import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CoursesComponent,
    AboutComponent,
    RegisterComponent,
    TeachersComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
