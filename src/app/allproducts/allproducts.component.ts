import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  allProduct: any = [];
  cart: any = [];
  add: number = -1;
  favorite: any = [];
  isActive: boolean = false;
  constructor(private _ProductService: ProductService, private _router: Router) {
    _ProductService.getProducts().subscribe((data: any) => {
      this.allProduct = data
      console.log(data)
    })
  }
  ngOnInit(): void {
  }
  addToCart(index: any) {
    if (localStorage.getItem("cart") !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!)
      this.cart.push(this.allProduct[index]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      this.cart.push(this.allProduct[index])
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  addFav(index: number) {
    if (localStorage.getItem("favorite") !== null) {
      this.favorite = JSON.parse(localStorage.getItem('favorite')!)
      this.favorite.push(this.allProduct[index])
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
    } else {
      this.favorite.push(this.allProduct[index])
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
    }

  }
  onClick(food: any) {
    food.isActive = !food.isActive;
  }

}
