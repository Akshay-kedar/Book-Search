import { Injectable } from '@angular/core';

type student = {
  name: string;
  grade: string;
};
@Injectable({ providedIn: 'root' })
export class ArrayManupulationService {
  //     Problem: Given an array of students with a grade, group them into a map based on their grade.
  // Input:[
  //   { name: 'John', grade: 'A' },
  //   { name: 'Jane', grade: 'B' },
  //   { name: 'Tom', grade: 'A' }
  // ]

  // Output:-{
  //   A: [{name: 'John', ...}, {name: 'Tom', ...}],
  //   B: [{name: 'Jane', ...}]
  // }

  GroupBy(Students: any) {
    //const groupBygrade:Record<string,student[]>={};
    const groupBygrade: { [key: string]: student[] } = {};

    for (let student of Students) {
      if (!groupBygrade[student.grade]) {
        groupBygrade[student.grade] = [];
      }
      groupBygrade[student.grade].push(student);
    }

    console.log('grouip', groupBygrade);
  }



// Array Chunking Utility
// Problem: Create a reusable Angular service method that splits a given array into chunks of a specified size.
// Example:
// chunkArray([1,2,3,4,5], 2) ➞ [[1,2],[3,4],[5]]

chunkArray(array:any[],size:number){
const chunkedArray=array.reduce((accum,currnt,i)=>{
    if(i%size){
        accum.push([currnt]);
    }
    else{
        accum[accum.length-1].push(currnt)
    }
    return accum
},[])

return chunkedArray;


}

  
}
