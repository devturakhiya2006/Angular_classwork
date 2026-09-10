import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Product {
  id:number;
  title:string;
  description:string;
  category:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get("https://dummyjson.com/products").subscribe((data)=>{
    console.log(data)
    })
  }
}