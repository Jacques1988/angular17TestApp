import { BookComponent } from "./book.component"
import { BookDetailComponent } from "./book-detail/book-detail.component"
import { confirmLeaveGuard } from "./confirm-leave.guard"
import { BookNewComponent } from "./book-new/book-new.component"

export const BOOK_ROUTES = [
    {
        path:'',
        component: BookComponent,
    },
    {
        path:'new',
        component: BookNewComponent,
    },
    {
        path: ':isbn',
        component: BookDetailComponent,
        canDeactivate: [confirmLeaveGuard],
    },
    
]