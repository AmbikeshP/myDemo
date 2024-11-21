import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/book.service';
import { BookType } from '../../services/book.model';
import { ColDef, RowSelectionOptions, } from 'ag-grid-community';
import { ButtonRendererComponent } from './button-rendere.component';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books!: BookType[];
  rowData: any;
  selectedBook!: BookType;
  currentIndex!: number;
  updatedBook!: BookType;
  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [5, 10, 25];
  themeClass: string = "ag-theme-quartz";
  frameworkComponents: any;
  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
    headerCheckbox: false,
  };
  columnDefs: ColDef<BookType>[] = [
    { headerName: 'TITLE', field: 'title' },
    { headerName: 'AUTHOR', field: 'author', maxWidth: 150 },
    { headerName: 'YEAR', field: 'year', maxWidth: 100 },
    { headerName: 'GENRE', field: 'genre' },
    { headerName: 'DESCRIPTION', field: 'description', minWidth: 250 },
    {
      headerName: 'Actions', minWidth: 80,
      cellRenderer: ButtonRendererComponent
    }];

  constructor(private booksService: BooksService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => {
      this.rowData = books;
    });

    this.updatedBookDetails();

  }
  onEdit(rowData: any) {
    // navigate to edit page with current book id
    this.router.navigate(['/books/edit', rowData.id]);
  }
  updatedBookDetails() {
    this.updatedBook = this.booksService.getData();
    console.log(this.updatedBook);

  }
  onDelete(rowData: any): void {
    this.booksService.deleteBook(rowData.id);
  }

}
