import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/components/login/login.component';
import { UserComponent } from './modules/components/user/user.component';
import { CoursesTableComponent } from './modules/components/courses/courses-table/courses-table.component';
import { CoursesRowComponent } from './modules/components/courses/courses-row/courses-row.component';
import { RegisterComponent } from './modules/components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SettingsComponent } from './modules/components/settings/settings.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesTableComponent,
    CoursesRowComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
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
