import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../models/books';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public booksModel: BooksModel) { }

  ngOnInit() {
    // this.ordersList = this.booksModel.orders;
  }

}
