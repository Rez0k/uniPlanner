import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesTableComponent } from './modules/components/courses/courses-table/courses-table.component';
import { CoursesRowComponent } from './modules/components/courses/courses-row/courses-row.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './modules/components/courses-page/courses-page.component';
import { CourseModalComponent } from './modules/components/course-modal/course-modal.component';

const routes: Routes = [
  { path: '', component: CoursesPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesTableComponent,
    CoursesRowComponent,
    CoursesPageComponent,
    CourseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
