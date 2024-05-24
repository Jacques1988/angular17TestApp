import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Book } from './book';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { BookCardComponent } from './book-card/book-card.component';

import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './services/book-api.service';
import { Subscription, Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private bookApi: BookApiService,
              private router: Router
  ){}
  books:Book[] = [] 
  bookSearchTerm!: string;
 /*  subscription!: Subscription; */
  books$! : Observable<Book[]>; 

ngOnInit(){
  /* const observer = {
    next: (books: Book[]) => this.books = books,
    error: (error: any) => console.error(error),
    complete: () => {}
  } */
 /* this.subscription = this.bookApi.getAll().subscribe(observer); */
 this.books$ = this.bookApi.getAll();
}

  goToBookDetails(book: Book){
    this.router.navigate(['/books', book.isbn]);
  }

  updateBookSearchTerm(input : Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }

  /* ngOnDestroy(){
    this.subscription?.unsubscribe();
  } */

}
