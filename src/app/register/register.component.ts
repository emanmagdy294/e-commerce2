import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: string = '';
  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.maxLength(10), Validators.minLength(3), Validators.required]),
    last_name: new FormControl(null, [Validators.maxLength(10), Validators.minLength(3), Validators.required]),
    age: new FormControl(null, [Validators.min(16), Validators.max(80), Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
  })
  constructor(private _Router: Router, private _authservice: AuthService, private toastr:ToastrService) { }
  // submitRegisterForm() {
  //   console.log(this.registerForm.value)
  //   const model: Register = {
  //     email: this.registerForm.value.email,
  //     username: this.registerForm.value.username,
  //     password: this.registerForm.value.password,
  //     name: {
  //       firstname: this.registerForm.value.first_name,
  //       lastname: this.registerForm.value.last_name
  //     },
  //     address: {
  //       city: this.registerForm.value.address,
  //       street: '',
  //       number: 0,
  //       zipcode: '',
  //       geolocation: {
  //         lat: '',
  //         long: ''
  //       }
  //     },
  //     phone: this.registerForm.value.phone
  //   }
  //   this._authservice.register(model).subscribe((response: any) => {
  //     this.toastr.success("Register Success , Welcome To You", 'Success');
  //     this._Router.navigate(['/home']);
  //   }, error => {
  //     this.toastr.error(error.errors.error.message, 'Error');
  //     console.log(error)
      
  //   })
  //   console.log(model)
  // }

  submitRegisterForm(registerForm: FormGroup) {
    this._authservice.register(registerForm.value).subscribe((response: any) => {
      if (response.message == 'success') {
        this.toastr.success("Register Success , Welcome To You", 'Success');
        this._Router.navigate(['/login'])
      }
      else {
        this.toastr.error(this.error, 'Error , TRY Again');
        this.error = response.errors.email.message
      }
    })
  }
  ngOnInit(): void {
  }

}
