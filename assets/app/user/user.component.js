import { Component } from '@angular/core';
import { UserService } from './user.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.isLoggedIn = function () {
        return this.userService.isLoggedIn();
    };
    UserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user',
                    template: "\n    <header class=\"row spacing\">\n        <nav class=\"col-md-8 col-md-offset-2\">\n            <ul class=\"nav nav-pills\">\n                <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['signup']\">Signup</a></li>\n                <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['signin']\">Signin</a></li>\n                <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['logout']\">Logout</a></li>\n                <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['forgetPassword']\">Forget Password</a></li>\n            </ul>\n            \n        </nav>\n    </header>\n    <br>\n    <div class=\"row spacing\">\n       <router-outlet></router-outlet>\n    </div> \n"
                },] },
    ];
    /** @nocollapse */
    UserComponent.ctorParameters = function () { return [
        { type: UserService, },
    ]; };
    return UserComponent;
}());
export { UserComponent };
