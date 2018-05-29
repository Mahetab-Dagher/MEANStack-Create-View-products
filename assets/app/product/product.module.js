import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from "./product-new.component";
import { productRouting } from "./product.routing";
import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list.component";
import { OneProductComponent } from "./product-one.component";
import { FileUploadModule } from "ng2-file-upload";
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NewProductComponent,
                        ProductListComponent,
                        OneProductComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        productRouting,
                        FileUploadModule
                    ],
                    providers: [
                        ProductService
                    ]
                },] },
    ];
    return ProductModule;
}());
export { ProductModule };
