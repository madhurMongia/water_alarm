import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm  :FormGroup = {} as FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.LoginForm.get('email');
  }

  get password() {
    return this.LoginForm.get('password');
  }

  onSubmit() {
    this.authService.login(this.LoginForm.value.email,this.LoginForm.value.password ).subscribe({
      next : (isLoggedIn:boolean) => {
        console.log(isLoggedIn);
        if(isLoggedIn) {
          this.router.navigate(['main/']);
        }
      }
    })
  }
}
