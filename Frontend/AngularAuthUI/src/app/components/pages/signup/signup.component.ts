import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye";
  messageToReturn: string ='';

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye-slash" : this.eyeIcon = "fa-eye";
    this.isText ? this.type = "text" : this.type = "password";
  }
  
  signupObject: Signup;

  onInit() {

  }

  constructor(private http: HttpClient) {
    this.signupObject = new Signup();
  }

  onSignup() {
    if(this.signupObject.password != this.signupObject.passwordConfirm)
      {
        this.messageToReturn = "Passwords don't match !"
      }
  }

  isValidEmail(email: string): boolean {
    // Define the regular expression for a valid email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use the test method to check if the email matches the regex
    return emailRegex.test(email);
}

}

export class Signup {
  email:string;
  password:string;
  passwordConfirm:string;
  username:string;
  constructor() {
    this.email='';
    this.password='';
    this.passwordConfirm='';
    this.username='';
  }
}