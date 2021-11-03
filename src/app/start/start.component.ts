import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  products: any = [];

  constructor(private _ProductService: ProductService) {
    _ProductService.getSomeProducts().subscribe((data: any) => {
      this.products = data
      console.log(data)
    })
   }

  ngOnInit(): void {
  }

}
