import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule  } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/components/login/login.component';
import { UserComponent } from './modules/components/user/user.component';
import { CoursesTableComponent } from './modules/components/courses/courses-table/courses-table.component';
import { CoursesRowComponent } from './modules/components/courses/courses-row/courses-row.component';
import { AddCourseRowComponent } from './modules/components/courses/add-course-row/add-course-row.component';


const routes: Routes = [
  { path: '', component: CoursesTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesTableComponent,
    CoursesRowComponent,
    LoginComponent,
    UserComponent,
    AddCourseRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
