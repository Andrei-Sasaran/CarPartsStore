import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent} from '../../../app.component';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye";
  email:string='';

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye-slash" : this.eyeIcon = "fa-eye";
    this.isText ? this.type = "text" : this.type = "password";
  }

  loginObject: Login;
  constructor(private http: HttpClient, private router: Router, private pagesService:PagesService) {
    this.loginObject = new Login();
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  ngOnInit(): void {
    
  }

  onLogin() {
    // debugger;
    this.http.post('http://localhost:57468/api/Users/Login', this.loginObject).subscribe((data)=>{
      if(data == "Valid User"){
        this.pagesService.setEmail(this.loginObject.email);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("Invalid User !")
      }
      
    })  
  }

  toSignup() {
    this.router.navigateByUrl('/signup');
  }

}

export class Login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}