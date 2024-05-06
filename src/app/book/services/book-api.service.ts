import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  headers:HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private readonly bookApiUrl = 'http://localhost:4730/books';
  
  constructor(
    private readonly http: HttpClient
  ) { }


  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.bookApiUrl, {headers: this.headers});
  }

  getBookByIsbn(isbn:string):Observable<Book>{
    return this.http.get<Book>(`${this.bookApiUrl}/${isbn}`, {headers: this.headers});
  }
}
