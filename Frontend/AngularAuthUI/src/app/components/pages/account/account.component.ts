import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  email:string='';
  user: User;
  userToSend:UserToSend;
  
  constructor(private pagesService:PagesService, private http:HttpClient, private router:Router){
    this.pagesService.getEmail.subscribe(e => this.email = e);;
    this.user = new User();
    this.userToSend = new UserToSend();
  }

  ngOnInit() {
    this.userToSend.email = this.email;
    this.http.post('http://localhost:57468/api/Users/GetUserByEmail', this.userToSend).subscribe((data:any) => {
      this.user.username = data[0].userName;
      this.user.shoppingCart = data[0].shoppingCart;
      this.user.price = data[0].totalPrice;
    })
  }



  toDashboard() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/dashboard');
  }

  toCart() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/cart');
  }

  toVin() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/vin');
  }

  toBrakes() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/brakes');
  }

  toEngines() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/engines');
  }

  toOils() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/oils');
  }

  toRadiators() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/radiators');
  }

  toSuspensions() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/suspensions');
  }

  toTransmisions() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/transmisions');
  }

  toWheels() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/wheels');
  }

  toChasis() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/chasis');
  }

}

export class User {
  email:string;
  username:string;
  shoppingCart:string;
  price:number;
  constructor(){
    this.email = '';
    this.username = '';
    this.shoppingCart = '';
    this.price = 0;
  }
}

export class UserToSend {
  email:string;
  constructor() {
    this.email ='';
  }
}
