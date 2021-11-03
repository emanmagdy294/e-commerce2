import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string = '';
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
  })
  constructor(private _AuthService: AuthService, private _router: Router, private toastr: ToastrService ) { }

  submitloginForm(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe((response) => {

      if (response.message == 'success') {
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveCurrentUser();
        this.toastr.success("Log in Success , Welcome To Back", 'Success');
        this._router.navigate(['/home']);
      }
      else {
        this.toastr.error(this.error, 'Error , TRY Again');
        this.error = response.message;
      }
    })
  }
  ngOnInit(): void {
  }

}
