import { Injectable } from "@angular/core";
import { Employee } from "./data";

@Injectable({
    providedIn:"root"
})
export class EmployeeAnylatics {
    
// Challenge: Employee Analytics Dashboard
// Scenario:
// You are given an array of Employee objects in a company. Each employee belongs to a department,
//  has multiple performance scores, and might be working on multiple projects.
//   You are tasked with extracting and transforming data to display on a dashboard.



// Q1]Top Performers List:
//Return the names of the top 2 performers (based on the average of performanceScores), only if they are isActive.
top2Perfomer(data:Employee[],topN:number){
  let topTwoperformer=[];

 return data.filter(emp=> emp.isActive).map(emp=>({
    name:emp.name,
    aggrigate:emp.performanceScores.reduce((accum,cur)=>{
        return accum=accum+cur
    },0)/emp.performanceScores.length
 }))
 .sort((a,b)=>{return b.aggrigate-a.aggrigate})
 .slice(0, topN)
 .map(emp => emp.name);
   


}

// Department Stats Map:
// Create a mapping of departments to the number of active employees in each.

departmetStat( data:Employee[]){
  

    const depStat={};

    data.filter(emp=>emp.isActive==true).map((emp)=>{
        if(!depStat[emp.department]){

            depStat[emp.department]=[]
        }
        
           depStat[emp.department].push(emp)
        
    })
    console.log('depStat',depStat);
}


// Project Hours Aggregation:
// Return a dictionary where the key is projectId and the value is the total hours logged across all employees.

// Sorted Project Contributors:
// Return a list of all employee names who contributed to project Alpha, sorted by total hours logged (descending).

// Performance Warning List:
// Find all active employees whose average performance score is below 85, and return an array of objects:





}