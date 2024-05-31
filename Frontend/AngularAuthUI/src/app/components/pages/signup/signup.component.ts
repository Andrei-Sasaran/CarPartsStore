import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PagesService } from '../pages.service';
import { sign } from 'crypto';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye";
  passNoMatch: boolean = false;
  emailNotOk: boolean = false;

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye-slash" : this.eyeIcon = "fa-eye";
    this.isText ? this.type = "text" : this.type = "password";
  }

  signupObject: Signup;
  signupPostObject: SignupPost;

  onInit() {

  }

  constructor(private http: HttpClient, private router: Router ,private pagesService: PagesService) {
    this.signupObject = new Signup();
    this.signupPostObject = new SignupPost();
  }

  onSignup() {
    if (this.signupObject.password != this.signupObject.passwordConfirm) {
      this.passNoMatch = true;
    } else {
      this.passNoMatch = false;
    }
    if (this.isValidEmail(this.signupObject.email)) {
      this.emailNotOk = false;
    } else {
      this.emailNotOk = true;
    }
    if (!this.emailNotOk && !this.passNoMatch) {
      this.performPost();
    }
  }

  performPost() {
    this.signupPostObject.email = this.signupObject.email;
      this.signupPostObject.password = this.signupObject.password;
      this.signupPostObject.username = this.signupObject.username;
      this.http.post('http://localhost:57468/api/Users/Post', this.signupPostObject).subscribe((data) => {
        if (data == "Added with succes!") {
          this.router.navigateByUrl('/login');
        } else {
          alert("Email already registered!")
        }
      })
  }

  removeEmailNotOk() {
    this.emailNotOk = false;
  }

  removePassNoMatch() {
    this.passNoMatch = false;
  }

  isValidEmail(email: string): boolean {
    // Define the regular expression for a valid email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use the test method to check if the email matches the regex
    return emailRegex.test(email);
  }

}

export class Signup {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  constructor() {
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
    this.username = '';
  }
}

export class SignupPost {
  email:string;
  password:string;
  username:string;
  constructor() {
    this.email = '';
    this.password = '';
    this.username = '';
  }
}