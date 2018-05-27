import { Routes, RouterModule } from "@angular/router";
import { NewProductComponent } from "./product-new.component";
import { ProductListComponent } from "./product-list.component";

const PRODUCT_ROUTES: Routes = [
    { path: '', redirectTo: 'new', pathMatch: 'full' },
    { path: 'new', component: NewProductComponent },
    { path: 'viewp', component : ProductListComponent}
];
export const productRouting = RouterModule.forChild(PRODUCT_ROUTES)