import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../models/books';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cartCount: number = 0;

  constructor(public booksModel: BooksModel) { }

  ngOnInit() {
    if(this.booksModel && this.booksModel.cart){
      this.cartCount = this.booksModel.cart.length;
    }
  }

}
