import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorite: any = [];
  count: any
  constructor( private _produc:ProductService , private _auth:AuthService) { }
  delete(i: any) {
    this.favorite.splice(i, 1);
    localStorage.setItem('favorite', JSON.stringify(this.favorite))
  }
  ngOnInit(): void {
    this.favorite = JSON.parse(localStorage.getItem('favorite')!);
    this.count = this.favorite.length;

  }

}
