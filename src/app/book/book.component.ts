import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Book } from './book';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './services/book-api.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    AsyncPipe,
    NgIf,
    NgFor,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private bookApi: BookApiService){}
  books: Book[] = []
  bookSearchTerm!: string;
  subscription!: Subscription;

ngOnInit(){
  const observer = {
    next: (books: Book[]) => this.books = books,
    error: (error: any) => console.error(error),
    complete: () => {}
  }
 this.subscription = this.bookApi.getAll().subscribe(observer);
}

ngOnDestroy(){
  this.subscription?.unsubscribe();
}

  goToBookDetails(book: Book){
    console.log("Navigate to book details, soon...");
    console.table(book);
  }

  updateBookSearchTerm(input : Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }

}
