import { Injectable } from "@angular/core";
import { products } from "../../products";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {
    constructor(private http: HttpClient) { }
    
    getProducts():Observable<any> {
        //return products;
        return this.http.get('/api/v1/products')
    }
    getProductsById(id : number):Observable<any> {
        //return products.find(e => e.id === id);
        return this.http.get(`/api/v1/products/${id}`)
    }

}