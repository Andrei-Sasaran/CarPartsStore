import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { PagesService } from '../pages.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-vin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './vin.component.html',
  styleUrl: './vin.component.css'
})
export class VINComponent {

  email:string='';
  send:string = '';

  @ViewChild('decoder') decoderPanel!: ElementRef;
  @ViewChild('info') infoPanel!: ElementRef;

  vinNotOK: boolean = false;

  vinPostObject: VinPost;
  vinObject: VinShow;

  constructor(private pagesService:PagesService, private http: HttpClient, private router: Router, private renderer: Renderer2) {
    this.vinPostObject = new VinPost;
    this.vinObject = new VinShow;
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

  exchange() {
    if (this.decoderPanel.nativeElement.hidden) {
      this.renderer.setProperty(this.decoderPanel.nativeElement, 'hidden', false);
      this.renderer.setProperty(this.infoPanel.nativeElement, 'hidden', true);
    } else {
      this.renderer.setProperty(this.decoderPanel.nativeElement, 'hidden', true);
      this.renderer.setProperty(this.infoPanel.nativeElement, 'hidden', false);
    }
  }
 
  onClickProcess() {
    console.log(this.isValidVin(this.vinPostObject.vin))
    if (this.isValidVin(this.vinPostObject.vin)) {
      this.vinNotOK = false;
    }
    else {
      this.vinNotOK = true;
    }
    if(!this.vinNotOK){
      this.decodeVin();
    }
  }
  decodeVin() {
    this.http.post('http://localhost:57468/api/Cars/GetCarsByVIN', this.vinPostObject).subscribe((data:any) => {
      this.vinObject.vin = data[0].Vin;
      this.vinObject.location = data[0].location;
      this.vinObject.manufacturer = data[0].manufacturer;
      this.vinObject.fuelType = data[0].fuelType;
      this.vinObject.model = data[0].model;
      this.vinObject.engineSize = data[0].engineSize;
      this.vinObject.engineType = data[0].engineType;
      this.vinObject.securityCode = data[0].securityCode;
      this.vinObject.modelYear = data[0].modelYear;
      this.vinObject.assemblyPlant = data[0].assemblyPlant;
      this.vinObject.serialNumber = data[0].serialNumber;
      this.exchange();
    })
  }

  isValidVin(input: string): boolean {
    const regex = /^[A-Z0-9]{17}$/;
    return regex.test(input);
  }

  removevinNotOk() {
    this.vinNotOK = false;
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

}
export class VinShow {
  vin: string;
  location: string;
  manufacturer: string;
  fuelType: string;
  model: string;
  engineSize: number;
  engineType: string;
  securityCode: number;
  modelYear: number;
  assemblyPlant: string;
  serialNumber: number;
  constructor() {
    this.vin = '';
    this.location = '';
    this.manufacturer = '';
    this.fuelType = '';
    this.model = '';
    this.engineSize = -1;
    this.engineType = '';
    this.securityCode = -1;
    this.modelYear = -1;
    this.assemblyPlant = '';
    this.serialNumber = -1;

  }
}

export class VinRecieve {
  httpResponse: any;
  recivedCar: VinShow;
  constructor(httpResponse:any, recivedCar:VinShow) {
    this.httpResponse = httpResponse;
    this.recivedCar = recivedCar
  }
}

export class VinPost {
  vin: string;
  constructor() {
    this.vin = '';
  }
}