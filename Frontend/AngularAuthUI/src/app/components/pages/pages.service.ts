import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private email = new BehaviorSubject('');
  getEmail = this.email.asObservable();

  constructor() { }

  setEmail(email: string) {
    this.email.next(email)
  }

}
