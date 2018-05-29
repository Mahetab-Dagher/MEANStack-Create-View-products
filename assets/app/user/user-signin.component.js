import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { UserService } from "./user.service";
var SigninComponent = /** @class */ (function () {
    function SigninComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.userService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('isAdmin', data.isAdmin);
            if (data.isAdmin) {
                _this.router.navigate(['/auth', 'products', 'new']);
            }
            else {
                _this.router.navigate(['/auth', 'products', 'viewp']);
            }
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-signin',
                    templateUrl: './user-signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    return SigninComponent;
}());
export { SigninComponent };
