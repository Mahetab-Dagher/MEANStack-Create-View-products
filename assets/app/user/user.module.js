import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './user-signup.component';
import { userRouting } from './user.routing';
import { SigninComponent } from './user-signin.component';
import { ProductComponent } from '../product/product.component';
import { LogoutComponent } from './user-logout.component';
import { ForgetpasswordComponent } from './user-forgetpassword.component';
import { ResetpasswordComponent } from './user-resetpassword.component';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SignupComponent,
                        SigninComponent,
                        ProductComponent,
                        LogoutComponent,
                        ForgetpasswordComponent,
                        ResetpasswordComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        userRouting
                    ]
                },] },
    ];
    return UserModule;
}());
export { UserModule };
