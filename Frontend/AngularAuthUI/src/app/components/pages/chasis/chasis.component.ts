import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chasis',
  standalone: true,
  imports: [],
  templateUrl: './chasis.component.html',
  styleUrl: './chasis.component.css'
})
export class ChasisComponent {
  email: string = '';

  constructor(private pagesService: PagesService, private router: Router) {
    this.pagesService.getEmail.subscribe(e => this.email = e);
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
