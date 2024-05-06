import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig,} from '@angular/core';
import { provideRouter } from '@angular/router';
import { App_ROUTES } from './routes';
import { BOOK_ROUTES } from './book/book-routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(App_ROUTES),
    provideRouter(BOOK_ROUTES)
  ]
};
