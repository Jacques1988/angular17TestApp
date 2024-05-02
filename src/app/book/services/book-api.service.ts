import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  books :Book[] = [
    {
      title: "How to win friends",
      author: "Dale Carnegie",
      abstract: "In this book is a subscription about a beautiful story",
    },
    {
      title: "The Willpower Instinct",
      author: "Kelly MCGonigal",
      abstract: "Based on Stanford University psychologist Kelly wildly popular course willpower",
    },
  ];


  constructor() { }


  getAll():Observable<Book[]>{
    return of(this.books);
  }
}
