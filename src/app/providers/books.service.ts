import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BooksModel } from '../models/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient,public booksModel: BooksModel) { }

  getBooks(): Observable<any> {
    // return this.http.get('https://jsonplaceholder.typicode.com/photos')
    // .pipe(
    //   tap(_ => console.log('got data'))
    // );
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  orderBooks(books:any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', books);
  }
}
