import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookApiService } from '../services/book-api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  book:Book | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly bookApiService :BookApiService,
  ){}


ngOnInit(){
  this.activatedRoute.params.subscribe((params) => {
    const isbn = params['isbn'];
    this.bookApiService.getBookByIsbn(isbn).subscribe((book:Book) => {
      this.book = book
    } )
  })
}
}
