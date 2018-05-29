import { Component, Input } from "@angular/core";
import { Product } from "./product.model";
var OneProductComponent = /** @class */ (function () {
    function OneProductComponent() {
    }
    OneProductComponent.decorators = [
        { type: Component, args: [{
                    selector: 'product-one',
                    templateUrl: './product-one.component.html'
                },] },
    ];
    /** @nocollapse */
    OneProductComponent.propDecorators = {
        "product": [{ type: Input },],
    };
    return OneProductComponent;
}());
export { OneProductComponent };
