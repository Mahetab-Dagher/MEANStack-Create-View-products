import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
var ForgetpasswordComponent = /** @class */ (function () {
    function ForgetpasswordComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ForgetpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.checkifauthinticated(this.myForm.value.secretWord, this.myForm.value.email)
            .subscribe(function (data) {
            //localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('isAdmin', data.isAdmin);
            _this.router.navigate(['/auth', 'resetPassword']);
        }, function (error) { return console.error(error); });
    };
    ForgetpasswordComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            secretWord: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ])
        });
    };
    ForgetpasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-forgetpassword',
                    templateUrl: './user-forgetpassword.component.html'
                },] },
    ];
    /** @nocollapse */
    ForgetpasswordComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    return ForgetpasswordComponent;
}());
export { ForgetpasswordComponent };
