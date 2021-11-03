import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  id: string = '';
  productDetails: any = {};
  constructor(private _ProductService: ProductService, private _ActivatedRoute: ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params.id;
    _ProductService.getProductsDetails(this.id).subscribe((response) => {
      this.productDetails = response;
      console.log(this.id);
      console.log(response);

    })
   }

  ngOnInit(): void {
  }

}
