import { Component } from "@angular/core";
import { ProductService } from "./product.service";
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        }, function (data) { return console.log(data); });
    };
    ProductListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'product-list',
                    template: "\n    <div class=\"col-md-8 col-md-offset-2\">\n        <product-one\n               [product]=\"product\"\n                *ngFor=\"let product of products\"></product-one>\n    </div>\n"
                },] },
    ];
    /** @nocollapse */
    ProductListComponent.ctorParameters = function () { return [
        { type: ProductService, },
    ]; };
    return ProductListComponent;
}());
export { ProductListComponent };
