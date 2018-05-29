import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './user-signup.component';
import { userRouting } from './user.routing';
import { SigninComponent } from './user-signin.component';
import { ProductComponent } from '../product/product.component';
import { LogoutComponent } from './user-logout.component';
import { ForgetpasswordComponent } from './user-forgetpassword.component';
import { ResetpasswordComponent } from './user-resetpassword.component';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({

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
})
export class UserModule{

}
