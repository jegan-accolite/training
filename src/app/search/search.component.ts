import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../models/books';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  books: any = [];

  constructor(public booksModel: BooksModel) { }

  ngOnInit() {
    this.books = this.booksModel.booksList;
  }

  addToCart(book: any) {
    if(book) {
      this.booksModel.cart.push(book);
    }
  }

}
