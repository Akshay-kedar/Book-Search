import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { EmployeeAnylatics } from './Shared/Service/employeeAnalytic.service';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule,
    ListboxModule,
    ProgressSpinnerModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    ToolbarModule
  ],
  providers: [ArrayManupulationService,ComponentComminication,Theamservice,EmployeeAnylatics],
  bootstrap: [AppComponent]
})
export class AppModule { }
