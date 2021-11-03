import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any = [];
  cart: any = [];
  add: number = -1;
  favorite: any = [];
  isActive: boolean = false;

  constructor(private _ProductService: ProductService, private _Router: Router , private route:ActivatedRoute , public translate:TranslateService) {
    _ProductService.getSomeProducts().subscribe((data:any) => {
      this.products = data
      console.log(data)
    })
  }
  router()
  {
    this._Router.navigate(['/allproducts'])
  }
  about(){
    this._Router.navigate(['about']);
  }

  addToCart(index: any) {
    if (localStorage.getItem("cart") !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!)
      this.cart.push(this.products[index]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      this.cart.push(this.products[index])
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
    addFav(index: number) {
    if (localStorage.getItem("favorite") !== null) {
      this.favorite = JSON.parse(localStorage.getItem('favorite')!)
      this.favorite.push(this.products[index])
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
    } else {
      this.favorite.push(this.products[index])
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
    }
   
    }
  onClick(food: any) {
    food.isActive = !food.isActive;
  }
  ngOnInit(): void {
  }

}
