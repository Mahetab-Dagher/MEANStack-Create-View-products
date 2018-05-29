import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.userName, this.myForm.value.secretWord);
        //console.log('@', user);
        this.userService.signup(user)
            .subscribe(function (data) {
            console.log(data);
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
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
            secretWord: new FormControl(null, Validators.required)
        });
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-signup',
                    templateUrl: './user-signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    return SignupComponent;
}());
export { SignupComponent };
