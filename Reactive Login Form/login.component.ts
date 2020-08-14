import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';  //mandatory
import { LoginPayload } from '../login-payload';   //your requirement
import { AuthService } from '../auth.regsiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginPayload: LoginPayload;
  constructor(private authservice: AuthService,private route:Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }
  

  ngOnInit() {
  }

  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;

    this.authservice.loginAuth(this.loginPayload).subscribe(data => {
      if (data) {
        
        console.log('login success');
        localStorage.setItem('username', JSON.stringify(data));
      } else {
        console.log('Login failed');
      }
    });
  }
  register(){
    this.route.navigate(['register']);
  }

}
