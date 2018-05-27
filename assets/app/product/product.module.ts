import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { NewProductComponent } from "./product-new.component";
import { productRouting } from "./product.routing";
import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list.component";
import { OneProductComponent } from "./product-one.component";
import { FileSelectDirective } from "ng2-file-upload";
@NgModule({
    declarations: [
        NewProductComponent,
        ProductListComponent,
        OneProductComponent,
        FileSelectDirective
    ],
    imports: [
	    CommonModule, 
        ReactiveFormsModule,
        productRouting
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule{

}