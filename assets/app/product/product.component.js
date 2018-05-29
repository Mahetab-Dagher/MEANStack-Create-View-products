import { Component } from "@angular/core";
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-product',
                    template: "\n    <header class=\"row spacing\">\n        <nav class=\"col-md-8 col-md-offset-2\">\n           <!-- <ul class=\"nav nav-tabs\">\n                <li routerLinkActive=\"active\" ><a [routerLink]=\"['new']\">New Product</a></li>\n                <li routerLinkActive=\"active\" ><a [routerLink]=\"['viewp']\">View Products</a></li>\n                \n            </ul> -->\n        </nav>\n    </header>\n    <br>\n    <div class=\"row spacing\">\n       <router-outlet></router-outlet>\n    </div>\n"
                },] },
    ];
    return ProductComponent;
}());
export { ProductComponent };
