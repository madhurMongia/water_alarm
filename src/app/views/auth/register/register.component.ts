import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm  :FormGroup = {} as FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {validators: this.checkPasswords });
  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
  let pass = group?.get('password')?.value;
  let confirmPass = group?.get('confirmPassword')?.value
  return pass === confirmPass ? null : { notSame: true }
  }

  get name() {
    return this.RegisterForm.get('name');
  }
  get email() {
    return this.RegisterForm.get('email');
  }
  get password() {
    return this.RegisterForm.get('password');
  }
  get confirmPassword() {
    return this.RegisterForm.get('confirmPassword');
  }
  onSubmit() {
    const values = this.RegisterForm.value;
    console.log(values)
    this.authService.register(values.name ,values.email,values.password, values.confirmPassword).subscribe({
      next: (isLoggedIn: any) => {
        if(isLoggedIn) 
        this.router.navigate(['/main']);
      }
    })
  }
}

