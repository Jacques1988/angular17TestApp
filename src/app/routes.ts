import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";



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
    {
        path: 'books',
        loadChildren:() => import('./book/book-routes').then(m => m.BOOK_ROUTES)
    }
    
]