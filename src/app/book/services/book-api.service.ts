import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  /* books :Book[] = [
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
  ]; */

  bookApiUrl = 'http://localhost:4730/books';
  
  constructor(private http: HttpClient) { }


  getAll(): Observable<Book[]>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.get<Book[]>(this.bookApiUrl, {headers});
  }
}
