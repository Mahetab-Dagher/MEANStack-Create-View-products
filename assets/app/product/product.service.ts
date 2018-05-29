import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from 'rxjs';
import {Product} from './product.model';

@Injectable()
export class ProductService{

    constructor(private http: Http){}
    addProduct(product: Product){
        const body = JSON.stringify(product);
        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/product/new', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {return Observable.throw(error.json());
        });
    }

    getProducts(){
        return this.http.get('https://create-view-products.herokuapp.com/product/')
        .map((response : Response) =>{
            const products = response.json().obj;
            let transformedProducts : Product[] = [];

            for(let product of products){
                transformedProducts.push(new Product(
                    product.image, 
                    product.description,
                    product.price,
                    product.newPrice,
                    product.quantity));
            }
            return transformedProducts;

        })
        .catch((error: Response) => {return Observable.throw(error.json());
        });
    }

}