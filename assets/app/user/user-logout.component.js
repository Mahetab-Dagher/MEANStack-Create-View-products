import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this.userService.logout();
        this.router.navigate(['/auth', 'signin']);
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-logout',
                    template: "\n    <div class=\"col-md-8 col-md-offset-2\">\n            <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    return LogoutComponent;
}());
export { LogoutComponent };
