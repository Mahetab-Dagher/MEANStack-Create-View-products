import { RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: UserComponent, loadChildren: './user/user.module#UserModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
