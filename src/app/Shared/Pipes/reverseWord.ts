import { Pipe, PipeTransform } from "@angular/core";


@Pipe(
    {
        name: 'reverseWords'
    }
)
export class ReverseWord implements PipeTransform{
    transform(value: string,) {
        
        //how are you?
        //woh era ?uoy
       const test= value.split(' ').map( (word:string)=>{
            return word.split('').reverse().join('')
        }).join(' ');

       
       return test 

    }

}