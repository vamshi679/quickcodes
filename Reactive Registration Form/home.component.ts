import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterPayLoad } from '../register-payload';
import { AuthService } from '../auth.regsiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: RegisterPayLoad;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private route:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userType:'',
      username: '',
      email: '',
      password: ''
    });
    this.registerPayload = {
      username: '',
      emailId: '',
      password: '',
      userType: ''
    };
  }
  onSubmit(){
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.emailId = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.userType = this.registerForm.get('userType').value;

    this.authService.register(this.registerPayload).subscribe(data=>
      {
      console.log('registrationsucess');
      },
      err=>
      {
        console.log("registration-failed");
      }
      );
    
  }
  login(){
    this.route.navigate(['']);

  }
}
