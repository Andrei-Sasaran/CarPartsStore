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

  onPartsTemplate() {
    this.router.navigateByUrl('/parts-template');
  }
  
}
