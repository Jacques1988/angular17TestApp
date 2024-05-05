import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModule } from './book/book.module';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    BookModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  
}
