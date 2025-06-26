import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReverseWord } from './Shared/Pipes/reverseWord';
import { SmartTitleCasePipe } from './Shared/Pipes/smartTitleCase';
import { ArrayManupulationService } from './Shared/Service/arrayMaupuulation.service';
import { ComponentComminication } from './Shared/Service/ComponentCommunication.service';
import { Theamservice } from './Shared/Service/ThemeService.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseWord,
    SmartTitleCasePipe,
    BookSearchComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArrayManupulationService,ComponentComminication,Theamservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
