import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  this.getEmployees();
  // this.employees = [{
  //   "id":1,
  //   "firstName":"pranjay",
  //   "lastName":"poddar",
  //   "emailId":"pranjaypoddar@email.com"
  // }]
  }

  private getEmployees(){
    this.employeeService.getEmplyeesList().subscribe(data=>{
      this.employees = data;
    });
  }

}
