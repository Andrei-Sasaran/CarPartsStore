import { Component, model } from '@angular/core';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brakes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './brakes.component.html',
  styleUrl: './brakes.component.css'
})
export class BrakesComponent {
 
  email:string='';
  brakesArray: any;

  constructor(private pagesService:PagesService, private http: HttpClient, private router: Router) {
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  ngOnInit() {
    this.Brakes();
  }

  Brakes() {
    this.http.get('http://localhost:57468/api/Brakes').subscribe((data:any) => {
      this.brakesArray = data;
    })
  }

  addToCart(id:number) {
    
  }

  toDashboard() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/dashboard');
  }

  toAccount() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/account');
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