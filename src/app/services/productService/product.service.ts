import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44317/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let getProductsPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(getProductsPath);
  }
  getAllByCategoryId(categoryID: number): Observable<ListResponseModel<Product>> {
    let getAllByCategoryIdPath = this.apiUrl + 'products/getallbycategoryid?categoryId=' + categoryID;
    return this.httpClient.get<ListResponseModel<Product>>(getAllByCategoryIdPath);
  }
}
