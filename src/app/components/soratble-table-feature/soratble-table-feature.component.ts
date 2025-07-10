import { Component, Input } from '@angular/core';


type SortOrder = "asc" | "dsc";

@Component({
  selector: 'app-soratble-table-feature',
  templateUrl: './soratble-table-feature.component.html',
  styleUrls: ['./soratble-table-feature.component.css']
})
export class SoratbleTableFeatureComponent {

  @Input()data:any[]=[];

  @Input()columns:string[]=[];


 sortColumn: string = '';
  sortDirection: SortOrder = 'asc';


 
  get sortedData() {
    const dataCopy=[...this.data];

    if(this.sortColumn){
      dataCopy.sort((a,b)=>{
        const valA=a[this.sortColumn];
        const valB=b[this.sortColumn];
        if(valA== null ||valB==null) return 0;
        
        const comparison=valA>valB?1:valA<valB?-1:0;
        return this.sortDirection==='asc'?comparison:-comparison;
      })
    }
    return dataCopy;
   
    
  }


  sortData(column:string){
    if(this.sortColumn===column){
      this.sortDirection=this.sortDirection==='asc'?'dsc':'asc';
    }else{
      this.sortColumn=column
      this.sortDirection="asc"
    }
  }



}
