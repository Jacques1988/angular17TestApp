import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModule } from './book/book.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BookModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  
}
