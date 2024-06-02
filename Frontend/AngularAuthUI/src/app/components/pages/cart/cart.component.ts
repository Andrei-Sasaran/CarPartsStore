import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  email:string='';
  
  constructor(private pagesService:PagesService, private router:Router){
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  ngOnInit() {
    
  }

  toDashboard() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/dashboard');
  }

  toAccount() {
    this.pagesService.setEmail(this.email);
    this.router.navigateByUrl('/account');
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
