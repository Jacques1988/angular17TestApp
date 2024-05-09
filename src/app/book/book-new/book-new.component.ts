import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookApiService } from '../services/book-api.service';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
newForm = this.buildForm();

constructor(
  private readonly form: FormBuilder,
  private readonly bookApiService:BookApiService,
  private readonly router: Router,
){}

create(){
  const book:Book = this.newForm.getRawValue();

  this.bookApiService.create(book).subscribe({
    next: () => this.router.navigate(["/books"]),
    error: (error) => alert('Ups, es ist etwas schief gegangen ' + book + error.message),
    complete: () => {alert('Buch erfolgreich hinzugefügt')}
  });
}


get author(): AbstractControl<string> {
  return this.newForm.get('author') as AbstractControl<string>
}

get title(): AbstractControl<string>{
  return this.newForm.get('title') as AbstractControl<string>
}

get subtitle(): AbstractControl<string>{
  return this.newForm.get('subtitle') as AbstractControl<string>
}

get abstract(): AbstractControl<string>{
  return this.newForm.get('abstract') as AbstractControl<string>
}


private buildForm(){
  return this.form.nonNullable.group({
    author: ["", [Validators.required, Validators.minLength(4)]],
    title: ["", [Validators.required, Validators.minLength(4)]],
    subtitle: ["", [Validators.required, Validators.minLength(4)]],
    abstract: ["", [Validators.required, Validators.minLength(4)]],
    id: [""],
    isbn:[""],
    publisher:[""],
    price:[""],
    numPages:[],
    cover:[""],
    userId:[]
  })
}

}
