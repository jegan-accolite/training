import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { BooksModel } from '../models/books';
import { HttpClientModule } from '@angular/common/http';
import { BookFilterPipe } from '../pipes/book-filter.pipe';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [BooksService,BooksModel]
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
