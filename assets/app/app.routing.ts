import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { ProductComponent } from "./product/product.component";




const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: UserComponent, loadChildren : './user/user.module#UserModule' }
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);