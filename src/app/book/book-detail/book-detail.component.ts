import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookApiService } from '../services/book-api.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  book:Book | undefined;
  subscription!: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly bookApiService :BookApiService,
  ){}


ngOnInit(){
  const observer = {
    next: (book:Book) => this.book = book,
    error: (error:any) => console.log(error),
    complete: () => {}
  }

 this.subscription = this.activatedRoute.params.subscribe((params) => {
    const isbn = params['isbn'];
    this.bookApiService.getBookByIsbn(isbn).subscribe(observer)
  })
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
