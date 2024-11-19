import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormatYearPipe } from '../pipes/format-year.pipe';


@NgModule({
  declarations: [
    BookListComponent,
    BookEditComponent,
    FormatYearPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
