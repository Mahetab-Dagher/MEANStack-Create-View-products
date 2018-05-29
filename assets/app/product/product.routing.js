import { RouterModule } from "@angular/router";
import { NewProductComponent } from "./product-new.component";
import { ProductListComponent } from "./product-list.component";
var PRODUCT_ROUTES = [
    { path: '', redirectTo: 'new', pathMatch: 'full' },
    { path: 'new', component: NewProductComponent },
    { path: 'viewp', component: ProductListComponent }
];
export var productRouting = RouterModule.forChild(PRODUCT_ROUTES);
