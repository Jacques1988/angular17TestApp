import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = {
    color: 'red',
  };

  @Input() content!:Book;
  @Output() detailClick = new EventEmitter<Book>();

  handleDetailClick(){
    this.detailClick.emit(this.content);
  }

  
}
