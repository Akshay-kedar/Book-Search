import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounce, debounceTime, of, switchMap, tap } from 'rxjs';
import { ComponentComminication } from '../Shared/Service/ComponentCommunication.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  //create a form control for input field this will give us .value changes-an Observable stream which is help ful for doing rxjs operator
  searchControl = new FormControl('');

  books: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient,private messsageService:ComponentComminication ) {}

  ngOnInit(): void {
    //      Debounced API request after typing

    //  Cancels previous request if user types quickly

    //  Shows list of results

    //  Shows “No results” message if empty

    //  Shows loading indicator

    this.SearchFunction();

    this.messsageService.sendMessage("hi from book-search component")
   
  }


  SearchFunction(){ this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.loading = true;
          this.books = [];
        }),

        switchMap((query) => {
          return this.http
            .get<any>(`https://openlibrary.org/search.json?q=${query}`)
            .pipe(
              catchError(() => {
                return of({ docs: [] });
              })
            );
        }),

        tap(() => (this.loading = false))
      )
      .subscribe((response) => {
        this.books = response?.docs?.slice(0, 10) || [];
      });
    }
}
