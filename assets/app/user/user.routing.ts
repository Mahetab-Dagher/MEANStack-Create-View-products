import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./user-signup.component";
import { SigninComponent } from "./user-signin.component";
import { ProductComponent } from "../product/product.component";
import { LogoutComponent } from "./user-logout.component";
import { ForgetpasswordComponent } from "./user-forgetpassword.component";
import { ResetpasswordComponent } from "./user-resetpassword.component";

const USER_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'forgetPassword', component: ForgetpasswordComponent},
    { path: 'resetPassword', component: ResetpasswordComponent},
    { path: 'products', component: ProductComponent, loadChildren: '../product/product.module#ProductModule'}
];
export const userRouting = RouterModule.forChild(USER_ROUTES)