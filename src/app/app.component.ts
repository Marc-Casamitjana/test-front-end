import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EmployeeService } from './app.service';
import { ProgressBarDirective } from './directives/progress-bar.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  employees;
  percentage: number;
  average: number;
  
  constructor(private employeeService: EmployeeService) { }
    
    getEmployees() {
      this.employeeService.getEmployees().
      subscribe(employees => { 
        this.employees = employees;

        this.employees.map(e => {
          this.average = (e.UsedDays / e.AvailableDays) * 100
          let str = e.EmployeeStartDate;
          e.EmployeeStartDate = str.substring(0, str.indexOf('T')).split('-').join('/');
          e.Average = Math.floor(this.average);
      })
      }, (err) => console.log(err))
      
    }

  ngAfterViewInit() {
    console.log('percentage', this.percentage)
  }
  ngOnInit() {
    this.getEmployees();
  }

}

