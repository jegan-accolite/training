import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { ActivatedRoute } from '@angular/router';

class ActivatedRouteMock {
  snapshot = { paramMap: { get() { return true; } } }
}

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [
        {provide:ActivatedRoute, useClass: ActivatedRouteMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
