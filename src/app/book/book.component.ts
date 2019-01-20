import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookTitle: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookTitle = this.route.snapshot.paramMap.get('title');
  }

}
