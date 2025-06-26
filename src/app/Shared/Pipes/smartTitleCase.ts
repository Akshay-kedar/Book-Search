import { Pipe, PipeTransform } from "@angular/core";

//Title Case Pipe (Skipping Minor Words)

// Write a custom Angular pipe that transforms a string into title case,
//  skipping minor words (e.g., "and", "the", "in") unless they are the first word.
// Input: "the lord of the rings"
// Output: "The Lord of the Rings"


@Pipe(
    {
        name:'smartTitleCase'
    }
)
export class SmartTitleCasePipe implements PipeTransform{
    transform(value:String):String {
        const minorWOrds=['in','of','the','and','for'];
        if(!value){
            return ''
        }
        const updatedString=value.split(' ').map((word,i)=>{
            if(word && i!=0){
                return  minorWOrds.includes(word)?word:word.charAt(0).toUpperCase()+word.slice(1);
            }

            return word.charAt(0).toUpperCase()+word.slice(1);

        }).join(' ')

        console.log('updatedString',updatedString)

        return updatedString
    }

}