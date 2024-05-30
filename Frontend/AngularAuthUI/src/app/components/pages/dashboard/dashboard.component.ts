import { Component, Input } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  email:string='';
  
  constructor(private pagesService:PagesService){
    this.pagesService.getEmail.subscribe(e => this.email = e);;
  }

}
