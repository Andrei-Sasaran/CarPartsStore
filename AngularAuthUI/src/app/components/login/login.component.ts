import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  smallEmail: string = "muted";
  eyeIcon: string = "fa-eye-slash";
  // loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  checkValid() {
    if(this.loginForm.invalid) this.smallEmail = "danger";
    else this.smallEmail = "muted";
  }

  // ngOnInit(): void {
  //   this.loginForm = this.formbuilder.group({
  //     email: ['',Validators.required],
  //     password: ['',Validators.required]
  //   })
  // }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
