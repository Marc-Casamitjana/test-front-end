import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EmployeeService } from './app.service';
import { progressBar } from './directives/prsogress-bar.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  employees;
  percentage: number;
  
  // @ViewChild(progressBar)
  // set progressBar(directive: progressBar){
  //   this.percentage = directive.percentage;
  // }
  
  constructor(private employeeService: EmployeeService, 
    private element: ElementRef) { }
    
    getEmployees() {
      this.employeeService.getEmployees().
      subscribe(employees => { 
        console.log(employees); 
        this.employees = employees 
      }, (err) => console.log(err)),
      () => {this.employees = this.getProgressBar(this.employees)}
      
    }

  ngOnInit() {
    this.getEmployees();
  }

  getProgressBar(employees) {
    let average = 0;
    this.employees = employees.map(e => {
      average = (e.UsedDays / e.AvailableDays) * 100
      e.Average = Math.floor(average);
    })
  }



}

