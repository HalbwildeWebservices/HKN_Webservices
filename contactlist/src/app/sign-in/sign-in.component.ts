import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../services/authService/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthServiceService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const username = this.loginForm.value.username ?? '';
    const password = this.loginForm.value.password ?? '';
    this.authService
      .login(username, password)
      .subscribe((res) => alert(res))
  }

}
