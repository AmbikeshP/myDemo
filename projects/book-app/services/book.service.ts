import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookType } from './book.model';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // private books: Book[] = [
  //   { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
  //   { id: 2, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  //   { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  // ];
  private books: BookType[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice."
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian, Political Fiction",
      year: 1949,
      description: "A dystopian novel set in a totalitarian society under the control of the Party and its leader, Big Brother, where surveillance and control are the norm."
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance, Fiction",
      year: 1813,
      description: "A romantic novel that explores the issues of marriage, social class, and morality in early 19th-century England."
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      description: "A novel set in the Jazz Age that critiques the American Dream and exposes the emptiness behind the glittering surface of wealth and social status."
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure, Fiction",
      year: 1851,
      description: "The story of Captain Ahab's obsessive quest to hunt down Moby Dick, the legendary white whale, exploring themes of fate, revenge, and the limits of human understanding."
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      year: 1951,
      description: "The novel follows 16-year-old Holden Caulfield, who narrates his experiences in New York City after being expelled from an elite prep school, exploring themes of alienation and the search for identity."
    },
    {
      id: 7,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1954,
      description: "The first book in the epic fantasy trilogy follows the journey of a young hobbit, Frodo Baggins, who is tasked with destroying a powerful ring that could bring darkness to Middle-earth."
    },
    {
      id: 8,
      title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      author: "C.S. Lewis",
      genre: "Fantasy, Children's Literature",
      year: 1950,
      description: "Four siblings are transported to the magical land of Narnia, where they must help Aslan, the lion, defeat the White Witch and bring peace to the land."
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian, Science Fiction",
      year: 1932,
      description: "A dystopian novel set in a futuristic society where technology, consumerism, and hedonism have replaced traditional values and individuality."
    },
    {
      id: 10,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937,
      description: "A prequel to 'The Lord of the Rings,' this book tells the story of Bilbo Baggins' unexpected adventure with a group of dwarves to reclaim their homeland from a dragon named Smaug."
    }
  ]

  private booksSubject = new BehaviorSubject<BookType[]>(this.books);

  constructor() { }

  getBooks() {
    return this.booksSubject.asObservable();
  }

  addBook(book: BookType) {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  updateBook(updatedBook: BookType) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.booksSubject.next(this.books);
    }
  }

  deleteBook(bookId: number) {
    this.books = this.books.filter(book => book.id !== bookId);
    this.booksSubject.next(this.books);
  }
}
