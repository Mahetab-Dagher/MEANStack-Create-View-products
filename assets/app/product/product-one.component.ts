import { Component , Input} from "@angular/core";
import { Product } from "./product.model";

@Component({
    selector: 'product-one',
    templateUrl: './product-one.component.html'
})
export class OneProductComponent{

    @Input() product : Product;

}