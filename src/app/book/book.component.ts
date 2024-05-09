import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Book } from './book';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { BookCardComponent } from './book-card/book-card.component';
import { BookNewComponent } from './book-new/book-new.component';

import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './services/book-api.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';



@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    AsyncPipe,
    NgIf,
    NgFor,
    RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private bookApi: BookApiService,
              private router: Router
  ){}
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
    this.router.navigate(['/books', book.isbn]);
  }

  updateBookSearchTerm(input : Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }

  addNewBookPage(){
    this.router.navigate(['new'])
  }

}
