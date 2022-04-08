import { Component, OnInit } from '@angular/core';
import { BookHandlerService } from 'src/app/services/book-handler.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  genres: any;

  addBook(postForm: NgForm) {
    this.bookService.addBook(postForm.value).subscribe((data) => {
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {}
  constructor(private bookService: BookHandlerService, private router: Router) {
    this.genres = bookService.Genres;
  }
}
