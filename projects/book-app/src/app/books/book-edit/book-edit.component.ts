import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/book.service';
import { BookType } from '../../services/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number | null = null;
  @Input() selectedBook: BookType | null = null; // Input for editing an existing book

  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required, Validators.maxLength(100)],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2024)]],
    });
  }

  ngOnInit(): void {

    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    if (this.bookId) {
      this.bookService.getBooks().subscribe(books => {
        const selectedBook = books.find(b => b.id === this.bookId);
        if (selectedBook) {
          this.bookForm.patchValue({
            title: selectedBook?.title,
            author: selectedBook?.author,
            year: selectedBook?.year,
            genre: selectedBook?.genre,
            description: selectedBook?.description
          });
        }
      });
    }
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.bookForm.patchValue({
  //     title: this.selectedBook?.title,
  //     author: this.selectedBook?.author,
  //     year: this.selectedBook?.year,
  //     genre: this.selectedBook?.genre,
  //     description: this.selectedBook?.description
  //   });
  //   this.bookForm.updateValueAndValidity();
  // }
  get bookFormControl() {
    return this.bookForm.controls;
  }
  onSubmit(): void {
    if (this.bookForm.invalid) return;

    const updatedBook: BookType = {
      id: this.bookId!,
      ...this.bookForm.value
    };

    this.bookService.updateBook(updatedBook);
    this.router.navigate(['/books']);
    //this.bookForm.reset();
  }
}
