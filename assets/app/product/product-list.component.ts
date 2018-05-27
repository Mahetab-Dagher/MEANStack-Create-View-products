import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <product-one
               [product]="product"
                *ngFor="let product of products"></product-one>
    </div>
`
})
export class ProductListComponent{

    products : Product[];
    constructor(private productService: ProductService){}

    ngOnInit(){
        this.productService.getProducts()
        .subscribe(
            (products : Product[]) => {
                this.products = products;
            },
        data => console.log(data));
    }


}