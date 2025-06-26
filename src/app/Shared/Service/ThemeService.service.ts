import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class Theamservice{

    private themeSubject=new BehaviorSubject<'Light'|'Dark'>('Light');
    

    toggleTheme(){
        this.themeSubject.next(this.themeSubject.value==='Light'?'Dark':'Light');
    }

    getTheme():Observable<'Light'|'Dark'>{
        return this.themeSubject.asObservable();
    }

}