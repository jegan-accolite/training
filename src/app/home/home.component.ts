import { Component, OnInit } from '@angular/core';
import { BooksService } from '../providers/books.service';
import { BooksModel } from '../models/books';
import { FileUploaderService } from '../providers/file-uploader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myFile: File;

  constructor(private booksService: BooksService, public booksModel: BooksModel, private fileUploaderService: FileUploaderService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe((response) => {
      console.log(response);
      if (response && response.length > 0) {
        this.booksModel.booksList = response.slice(0, 100);
        this.booksModel.booksList.forEach((book) => {
          book['description'] = 'Book abt ' + book.title;
          book['author'] = 'Martin';
          book['price'] = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        })
      }
    })
  }

  fileChange($event: any) {
    // console.log($event);
    if ($event.target.files && $event.target.files[0]) {
      this.myFile = $event.target.files[0];
    };
  }

  upload() {
    if (this.myFile) {
      this.fileUploaderService.uploadFile(this.myFile).subscribe((event) => {
        console.log(event);
      },
        (error) => { console.log('file upload error') })
    }
  }

}
