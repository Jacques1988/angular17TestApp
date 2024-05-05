import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'bookFilter',
  standalone: true
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], searchTitle: string ): Book[] {
    if(!books || !searchTitle){
      return books
    }
    if(books === null ){
      return []
    }
    searchTitle = searchTitle.toLowerCase();
    return books.filter(book => book.title.toLowerCase().includes(searchTitle));
  }

}
