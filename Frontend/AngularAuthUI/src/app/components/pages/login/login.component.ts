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
  shoppingCart: ShoppingCart;

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye-slash" : this.eyeIcon = "fa-eye";
    this.isText ? this.type = "text" : this.type = "password";
  }

  loginObject: Login;
  constructor(private http: HttpClient, private router: Router, private pagesService:PagesService, private http2: HttpClient,  private http3: HttpClient) {
    this.loginObject = new Login();
    this.shoppingCart = new ShoppingCart();
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  ngOnInit(): void {
    
  }

  onLogin() {
    // debugger;
    this.http.post('http://localhost:57468/api/Users/Login', this.loginObject).subscribe((data)=>{
      if(data == "Valid User"){
        this.pagesService.setEmail(this.loginObject.email);
        this.shoppingCart.tableName = this.loginObject.password;
        this.shoppingCartm();
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("Invalid User !")
      }
      
    })  
  }

  shoppingCartm() {
    this.http3.post('http://localhost:57468/api/ShoppingCart/DeleteShoppingCart', this.shoppingCart).subscribe((data)=>{
          console.log(data)
    })
    this.http2.post('http://localhost:57468/api/ShoppingCart/CreateShoppingCart', this.shoppingCart).subscribe((data2)=>{
          console.log(data2);
          debugger;
        });
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

export class ShoppingCart {
  tableName:string;
  pieceCell:string;
  pieceId:string;
  constructor() {
    this.tableName = '';
    this.pieceCell = '';
    this.pieceId = '';
  }
}