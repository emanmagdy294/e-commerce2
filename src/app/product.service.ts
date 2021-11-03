import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  //
export class ProductService {
  constructor(private _httpclient: HttpClient) { }
  getProducts(): Observable<any> {
    return this._httpclient.get(`https://fakestoreapi.com/products`)
  }
  getSomeProducts(): Observable<any> {
    return this._httpclient.get(`https://fakestoreapi.com/products?limit=5`)
  }
  getProductsDetails(id: string): Observable<any> {
    return this._httpclient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
