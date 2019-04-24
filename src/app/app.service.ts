import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employees = [];

  constructor(private http: HttpClient) { }

  getEmployees() {

    let username: string = 'VnklkBJ3BepTAADWQlq4%2f3ktKFWUSlWxsnpG4DlUVVGKomlxlrVUaQ%3d%3d';
    let password: string = '';

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Basic ${btoa(`${username}:${password}`)}`);

    const httpOptions = { headers };

    return this.http.get('https://woffu-dev.azurewebsites.net/api/v1/users', httpOptions);
    }
}
