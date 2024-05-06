import { BookComponent } from "./book.component"
import { BookDetailComponent } from "./book-detail/book-detail.component"

export const BOOK_ROUTES = [
    {
        path:'books',
        component: BookComponent,
    },
    {
        path: 'books/:isbn',
        component: BookDetailComponent,
    }
]