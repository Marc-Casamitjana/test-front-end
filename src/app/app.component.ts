import { Component, OnInit, AfterViewInit, OnChanges, AfterViewChecked } from '@angular/core';
import { EmployeeService } from './app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  employees;
  memoryEmployees;
  percentage: number;
  average: number;
  startDate = new FormControl('');
  endDate = new FormControl('');


  constructor(private employeeService: EmployeeService) { }

  getEmployees() {
    this.employeeService.getEmployees().
      subscribe(employees => {
        this.employees = employees;
        this.memoryEmployees = this.employees;
        this.employees.map(e => {
          this.average = (e.UsedDays / e.AvailableDays) * 100
          e.EmployeeStartDate = e.EmployeeStartDate.substring(0, e.EmployeeStartDate.indexOf('T')).split('-').reverse().join('/');
          e.Average = Math.floor(this.average);
          e.JobTitleId = e.JobTitleId ? e.JobTitleId : 'Unregistered';
          e.DeparmentId = e.DeparmentId ? e.DeparmentId : 'Unregistered';
        });
      }, (err) => console.log(err))

  }

  filterByDate() {
    this.employees = this.memoryEmployees;
    if (!this.startDate.value || !this.endDate.value) return;

    let startDate = this.startDate.value.split('-');
    let endDate = this.endDate.value.split('-');
    console.log(startDate, endDate)
    startDate = Date.UTC(startDate[0], startDate[1], startDate[2])
    endDate = Date.UTC(endDate[0], endDate[1], endDate[2])

    this.employees = this.employees.filter(e => {
      if (e.EmployeeStartDate) {
        let employeeDate = e.EmployeeStartDate.split('/');
        
        employeeDate = Date.UTC(employeeDate[2], employeeDate[1], employeeDate[0]);
        return employeeDate > startDate && employeeDate < endDate;
      }
    });
    this.acronymColor();
  }

  acronymColor() {
    let acronyms = document.querySelectorAll(".acronym");
    if(acronyms.length){
      acronyms.forEach(element => {
        element.setAttribute('style', `background:${this.getRandomColor()}`)
      });
    }
  }

  getRandomColor(){
    let colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  resetFilter(){
    this.employees = this.memoryEmployees;
    setTimeout(() => {
      
      this.acronymColor();
    }, 200);
  }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.acronymColor();
      
    }, 685);
  }

}

