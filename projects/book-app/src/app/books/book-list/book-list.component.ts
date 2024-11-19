import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/book.service';
import { BookType } from '../../services/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookType[] = [];

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  onDelete(bookId: number): void {
    this.booksService.deleteBook(bookId);
  }

  onEdit(book: BookType): void {
    console.log(book);
    this.router.navigate(['/books/edit', book.id]);
  }
}
