import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { BooksModel } from '../models/books';
import { RouterModule } from '@angular/router';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ OrdersComponent ],
      providers: [BooksModel]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
