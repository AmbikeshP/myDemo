import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormatYearPipe } from '../pipes/format-year.pipe';
import { HighlightColorDirective } from '../directives/highlight-color.directive';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './book-list/button-rendere.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookEditComponent,
    FormatYearPipe,
    HighlightColorDirective,
    ButtonRendererComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    AgGridAngular,
    AgGridModule
  ]
})
export class BooksModule { }
