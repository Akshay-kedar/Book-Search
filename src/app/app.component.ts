import { Component, OnInit } from '@angular/core';
import { ArrayManupulationService } from './Shared/Service/arrayMaupuulation.service';
import { ComponentComminication } from './Shared/Service/ComponentCommunication.service';
import { Theamservice } from './Shared/Service/ThemeService.service';
import { EmployeeAnylatics } from './Shared/Service/employeeAnalytic.service';
import { employees } from './Shared/Service/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-search-app';

   itemList = Array.from({ length: 23 }, (_, i) => `Item #${i + 1}`);
   
message="";

 userData = [
  { name: 'Alice', age: 30, email: 'alice@example.com' },
  { name: 'Bob', age: 25, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' }
];

columns=['name','age','email']
  constructor(private arrayService: ArrayManupulationService,private messsageService:ComponentComminication,private  themeService: Theamservice,
    private employeeAnylaticService:EmployeeAnylatics
   ){

  }
  ngOnInit(): void {
    this.messsageService.message$.subscribe((data)=>{
      this.message=data;
    })

     this.themeService.getTheme().subscribe(theme => {
    document.body.className = theme;
  });


    const array=[
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'B' },
  { name: 'Tom', grade: 'A' }
]
  
  console.log("Top Performers:",this.employeeAnylaticService.top2Perfomer(employees,2));
  this.employeeAnylaticService.departmetStat(employees)
  
    this.arrayService.GroupBy(array);
    this.employeeAnylaticService.projectHourAggrigatio(employees);
    this.employeeAnylaticService.sortedProjectContributor(employees)
  }



}
