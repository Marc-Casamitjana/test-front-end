import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeesComponent } from './employees/employees.component';
import {  HttpClientModule } from '@angular/common/http';
import { ProgressBarDirective } from './directives/progress-bar.directive';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProgressBarDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
