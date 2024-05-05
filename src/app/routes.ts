import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BookComponent } from "./book/book.component";


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
        path:'books',
        component: BookComponent,
    },
]