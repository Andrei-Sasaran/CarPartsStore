import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye";
  email:string = '';
  passwordReset: PasswordReset;
  emailToCheck: EmailToCheck;
  passwordToupdate: PasswordToUpdate;
  passNoMatch:boolean = false;
  emailNotOk: boolean = false;

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye-slash" : this.eyeIcon = "fa-eye";
    this.isText ? this.type = "text" : this.type = "password";
  }

  constructor(private http: HttpClient, private router:Router,private pagesService:PagesService) {
    this.passwordReset = new PasswordReset();
    this.passwordToupdate = new PasswordToUpdate();
    this.emailToCheck = new EmailToCheck();
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  onReset() {
    if(this.passwordReset.password != this.passwordReset.passwordCheck)
      {
        this.passNoMatch = true;
      }else
      {
      this.passNoMatch = false;
      }
    if(!this.passNoMatch){
      this.verifyEmail(this.passwordReset.email);
    }
  }

  verifyEmail(email:string){
    this.emailToCheck.email = email
    this.http.post('http://localhost:57468/api/Users/EmailCheck', this.emailToCheck).subscribe((data)=>{
      if(data == "Valid Email"){
        this.updatePassword();
      } else {
      }
      
    })  
  }

  updatePassword(){
    this.passwordToupdate.password = this.passwordReset.password;
    this.passwordToupdate.email = this.passwordReset.email;

    var inputData = {
      email: this.passwordReset.email,
      password: this.passwordReset.password,
    }

    this.http.put("http://localhost:57468/api/Users/UpdateUsersPassword",inputData).subscribe({
      next: (res:any) => {
        alert(res);
        this.router.navigateByUrl('/login');
      }
    })

  }

  removePassNoMatch() {
    this.passNoMatch = false;
  }

}

export class PasswordReset {
  email: string;
  password: string;
  passwordCheck: string;
  constructor() {
    this.email = '';
    this.password = '';
    this.passwordCheck = '';
  }
}

export class EmailToCheck {
  email: string;
  constructor() {
    this.email = '';
  }
}

export class PasswordToUpdate {
  password: string;
  email: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
