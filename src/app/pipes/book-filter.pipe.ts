import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books:any, searchTerm:string): any {
    if(!books || !searchTerm) {
      return books;
    }

    return books.filter(book => 
      book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
