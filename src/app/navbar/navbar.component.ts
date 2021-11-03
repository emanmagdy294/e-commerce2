import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  count: any;
  cart: any = [];
  isLogin: boolean = false;

  constructor(private _product: ProductService,private _auth:AuthService , private _router: Router) {
    this.count = this.cart.length;
    _auth.currentUser.subscribe(() => {
      if (_auth.currentUser.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  isLogout() {
    this._auth.Logout();
  }
  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    this.count = this.cart.length;
  }

}
