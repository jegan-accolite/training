import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  toggleLogin: boolean = true;

  message: string = ''
  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
    if (localStorage && localStorage.getItem(this.username) && this.password === localStorage.getItem(this.username)) {
      sessionStorage.setItem('loggedInUser', this.username);
      this.route.navigate(['/home']);
    } else {
      this.message = 'Invalid Credentials';
      this.showErrorMessage = true;
    }
  }

  signup() {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
    if (localStorage && localStorage.getItem(this.username)) {
      this.message = 'Username already exists!';
      this.showErrorMessage = true;
    }
    else if (this.password !== this.confirmPassword) {
      this.message = 'Password Mismatch!';
      this.showErrorMessage = true;
    }
    else if (this.username && this.password && this.password === this.confirmPassword) {
      localStorage.setItem(this.username, this.password);
      this.message = 'Account created Successfully!';
      this.showSuccessMessage = true;
    }
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }

  reset() {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
