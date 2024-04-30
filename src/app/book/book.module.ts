import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookApiService } from './services/book-api.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BookComponent,
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule { }
