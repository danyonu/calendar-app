import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { AuthData } from 'src/app/interfaces/auth-data';

@Component({
  selector: 'ca-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  onSubmit(): void {
    const user = this.loginForm.value;

    this.auth.login(user.userName, user.password).subscribe((data: AuthData) => {
      console.log("you are logged!");
    }, (error) => {
      console.log(error.message);
    });
  }
}
