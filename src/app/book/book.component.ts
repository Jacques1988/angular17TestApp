import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { NgFor, NgIf } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './services/book-api.service';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    NgIf,
    NgFor,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private bookApi: BookApiService){}
  books: Book[] = []
  bookSearchTerm: string = "";


ngOnInit(){
 this.books = this.bookApi.getAll();
}

  goToBookDetails(book: Book){
    console.log("Navigate to book details, soon...");
    console.table(book);
  }

  updateBookSearchTerm(input : Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }

}
