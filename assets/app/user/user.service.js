import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        //console.log('@_@ ', body);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    UserService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    UserService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    UserService.prototype.logout = function () {
        localStorage.clear();
    };
    UserService.prototype.checkifauthinticated = function (secretWord, email) {
        var data = { "secretWord": secretWord, "email": email };
        var body = JSON.stringify(data);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/user/check', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    UserService.prototype.resetpassword = function (newPassword) {
        var data = { "newPassword": newPassword };
        var body = JSON.stringify(data);
        //console.log('~_~ ',body);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.patch('https://create-view-products.herokuapp.com/user/' + localStorage.getItem('userId'), body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return UserService;
}());
export { UserService };
