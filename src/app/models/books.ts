import { Injectable } from '@angular/core';

@Injectable()
export class BooksModel {
    cart: any = [];
    orders: any = [];
    booksList: any = [
        {
            id: 1,
            title: '3 Idiots',
            description: 'Book abt friends',
            author: 'Chethan Baghat',
            price: 150
        },
        {
            id: 2,
            title: 'Half Girlfriend',
            description: 'Book abt friends',
            author: 'Chethan Baghat',
            price: 200
        },
        {
            id: 3,
            title: '2 States',
            description: 'Book abt friends',
            author: 'Chethan Baghat',
            price: 100
        },
        {
            id: 4,
            title: 'Game of Thromes',
            description: 'Book abt kings and family',
            author: 'George RR Martin',
            price: 500
        },
        {
            id: 5,
            title: 'Inferno',
            description: 'Thriller',
            author: 'JK Rowling',
            price: 120
        },
        {
            id: 6,
            title: 'Angels and Demons',
            description: 'Book abt Gods',
            author: 'JK Rowling',
            price: 180
        }
    ];
}

