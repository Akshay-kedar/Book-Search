import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReverseWord } from './Shared/Pipes/reverseWord';
import { SmartTitleCasePipe } from './Shared/Pipes/smartTitleCase';
import { ArrayManupulationService } from './Shared/Service/arrayMaupuulation.service';
import { ComponentComminication } from './Shared/Service/ComponentCommunication.service';
import { Theamservice } from './Shared/Service/ThemeService.service';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PaginatedListComponent } from './paginated-list/paginated-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseWord,
    SmartTitleCasePipe,
    BookSearchComponent,
    DynamicFormComponent,
    AddBookComponent,
    PaginatedListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [ArrayManupulationService,ComponentComminication,Theamservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
