import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../models/books';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;
  constructor(public booksModel: BooksModel) { }

  ngOnInit() {
    this.calculateTotal();
  }

  removeFromCart(book: any) {
    if(book) {
      for(let i =0; i < this.booksModel.cart.length ; i++){
        if(this.booksModel.cart[i].id === book.id) {
          this.booksModel.cart.splice(i, 1);
          break;
        }
      }
      this.calculateTotal();
      // this.booksModel.cart.push(book);
    }
  }

  orderBooks() {
    if(this.booksModel.cart && this.booksModel.cart.length > 0) {
      this.booksModel.orders = this.booksModel.orders.concat(this.booksModel.cart);
      this.booksModel.cart = [];
    }
  }

  calculateTotal() {
    this.totalAmount = 0;
    this.booksModel.cart && this.booksModel.cart.forEach((book) => {
      this.totalAmount += book.price;
    })
  }

}
