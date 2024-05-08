import { CanDeactivateFn } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const confirmLeaveGuard: CanDeactivateFn<BookDetailComponent> = (BookDetailComponent) => {
  return confirm('Möchtest du die Seite wirklich verlassen ?');
};
