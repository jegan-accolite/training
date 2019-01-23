import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

class RouterMock {
  navigate() { return true; }
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, FormsModule ],
      declarations: [ LoginComponent ],
      providers: [
        {provide:Router, useClass: RouterMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
