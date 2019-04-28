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
  percentage: number;
  average: number;
  startDate = new FormControl('');
  endDate = new FormControl('');


  constructor(private employeeService: EmployeeService) { }

  getEmployees() {
    this.employeeService.getEmployees().
      subscribe(employees => {
        this.employees = employees;
        console.log(employees);
        this.employees.map(e => {
          this.average = (e.UsedDays / e.AvailableDays) * 100
          let str = e.EmployeeStartDate;
          e.EmployeeStartDate = str.substring(0, str.indexOf('T')).split('-').reverse().join('/');
          e.Average = Math.floor(this.average);
          e.Acronym = e.Acronym.toUpperCase();
        });
      }, (err) => console.log(err))

  }

  filterByDate() {
    if (!this.startDate.value || !this.endDate.value) return;

    let startDate = this.startDate.value.split('/');
    let endDate = this.endDate.value.split('/');
    startDate = Date.UTC(startDate[2], startDate[1], startDate[0])
    endDate = Date.UTC(endDate[2], endDate[1], endDate[0])

    this.employees = this.employees.filter(e => {
      if (e.EmployeeStartDate) {
        let employeeDate = e.EmployeeStartDate.split('/');
        employeeDate = Date.UTC(employeeDate[2], employeeDate[1], employeeDate[0])
        return employeeDate > startDate && employeeDate < endDate;
      }
    });
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


  
  reverseString(str) {
  console.log( str.split("").reverse().join(""));
  }

  ngOnInit() {
    this.getEmployees();
    this.reverseString("hello");
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.acronymColor();
      
    }, 185);
  }

}

