import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Product } from './product.model';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.addProduct = function (product) {
        var body = JSON.stringify(product);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/product/new', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get('https://create-view-products.herokuapp.com/product/')
            .map(function (response) {
            var products = response.json().obj;
            var transformedProducts = [];
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var product = products_1[_i];
                transformedProducts.push(new Product(product.image, product.description, product.price, product.newPrice, product.quantity));
            }
            return transformedProducts;
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    ProductService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return ProductService;
}());
export { ProductService };
