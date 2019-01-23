import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BooksService } from '../providers/books.service';
import { BooksModel } from '../models/books';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule],
      declarations: [ CartComponent ],
      providers: [BooksModel, BooksService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
