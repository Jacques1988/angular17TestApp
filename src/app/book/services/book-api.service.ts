import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  headers:HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private readonly bookApiUrl = 'http://localhost:4730';
  
  constructor(
    private readonly http: HttpClient
  ) { }

  create(book:Book):Observable<Book>{
    return this.http.post<Book>(`${this.bookApiUrl}/books/`, book)
  }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.bookApiUrl}/books`, {headers: this.headers});
  }

  getBookByIsbn(isbn:string):Observable<Book>{
    return this.http.get<Book>(`${this.bookApiUrl}/books/${isbn}`, {headers: this.headers});
  }
}
