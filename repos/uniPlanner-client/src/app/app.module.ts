import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesTableComponent } from './modules/components/courses-table/courses-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoursesTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
