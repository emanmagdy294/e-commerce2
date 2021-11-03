import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
}) 
export class CartComponent implements OnInit {
  cart: any = [];
  count:any
  constructor(private _product:ProductService , private _router:Router) { }
  delete(i: any) {
    this.cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    this.count = this.cart.length;
  }
  

}
