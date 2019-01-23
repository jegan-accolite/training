import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { BooksModel } from '../models/books';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterContentChecked {

  cartCount = 0;
  loggedInUser = '';

  constructor(public booksModel: BooksModel) {
    if (this.booksModel && this.booksModel.cart) {
      this.cartCount = this.booksModel.cart.length;
    }
  }

  // ngOnInit() {
  //   if(this.booksModel && this.booksModel.cart){
  //     this.cartCount = this.booksModel.cart.length;
  //   }
  // }

  ngAfterContentChecked() {
    if (sessionStorage && sessionStorage.getItem('loggedInUser') != null) {
      this.loggedInUser = sessionStorage.getItem('loggedInUser');
    }
  }


  logout() {
    if (sessionStorage) {
      this.loggedInUser = '';
      sessionStorage.removeItem('loggedInUser');
    }
  }

}
