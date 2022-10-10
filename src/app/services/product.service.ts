import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/product/productResponseModel';
import { Product } from '../models/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44317/api/products/getall';
  constructor(private httpClient: HttpClient) {}
  
  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
