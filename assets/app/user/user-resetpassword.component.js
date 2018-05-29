import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ResetpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.resetpassword(this.myForm.value.newPassword)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data.token);
            if (data.isAdmin) {
                _this.router.navigate(['/auth', 'products', 'new']);
            }
            else {
                _this.router.navigate(['/auth', 'products', 'viewp']);
            }
        }, function (error) { return console.error(error); });
    };
    ResetpasswordComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            newPassword: new FormControl(null, Validators.required),
            confirmNewPassword: new FormControl(null, Validators.required)
        }, this.passwordMatchValidator);
    };
    ResetpasswordComponent.prototype.passwordMatchValidator = function (form) {
        return form.get('newPassword').value === form.get('confirmNewPassword').value
            ? null : { 'mismatch': true };
        //form.value.newPassword === form.value.confirmNewPassword ? null : {'mismatch': true};
    };
    ResetpasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-resetpassword',
                    templateUrl: './user-resetpassword.component.html'
                },] },
    ];
    /** @nocollapse */
    ResetpasswordComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    return ResetpasswordComponent;
}());
export { ResetpasswordComponent };
