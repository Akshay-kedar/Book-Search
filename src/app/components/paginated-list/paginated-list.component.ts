import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.css']
})
export class PaginatedListComponent {

  @Input()
  items:string[]=[];

  @Input()
  pageSize:number=5;


  currentPage: number = 0;

   get paginatedItems(): string[] {

    const startIndex= this.currentPage*this.pageSize;


    return this.items.slice(startIndex,startIndex+this.pageSize)
   }

 onPageChange(event: any): void {
    this.currentPage = event.page;
  }

}
