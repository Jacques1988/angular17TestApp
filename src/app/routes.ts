import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BookComponent } from "./book/book.component";
import { BookDetailComponent } from "./book/book-detail/book-detail.component";


export const App_ROUTES: Routes = [
    {
        path:"",
        redirectTo: 'about',
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    
]