import { Component, OnInit } from '@angular/core';
import { ArrayManupulationService } from './Shared/Service/arrayMaupuulation.service';
import { ComponentComminication } from './Shared/Service/ComponentCommunication.service';
import { Theamservice } from './Shared/Service/ThemeService.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-search-app';
message="";
  constructor(private arrayService: ArrayManupulationService,private messsageService:ComponentComminication,private  themeService: Theamservice ){

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
    this.arrayService.GroupBy(array);
  }

}
