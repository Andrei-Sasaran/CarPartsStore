import { Component, Input } from '@angular/core';
import { PagesService } from '../pages.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  email:string='';
  
  constructor(private pagesService:PagesService, private router:Router){
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  ngOnInit() {
    
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
