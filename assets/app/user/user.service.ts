import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { User } from "./user.model";

@Injectable()
export class UserService{
    constructor(private http: Http){}

    signup(user: User){
        const body = JSON.stringify(user);
        //console.log('@_@ ', body);
        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/user',body,{headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {return Observable.throw(error.json());
        });
    }
    signin(user: User){
        const body = JSON.stringify(user);
        
        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/user/signin',body,{headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {return Observable.throw(error.json());
        });
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    logout(){
        localStorage.clear();
    }

    checkifauthinticated(secretWord: string, email: string){
        var data = {"secretWord": secretWord, "email": email};
        const body = JSON.stringify(data);
        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.post('https://create-view-products.herokuapp.com/user/check',body,{headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {return Observable.throw(error.json());
        });
    }
    resetpassword(newPassword: string){
        var data = {"newPassword": newPassword};

        const body = JSON.stringify(data);
        //console.log('~_~ ',body);
        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.patch('https://create-view-products.herokuapp.com/user/'+ localStorage.getItem('userId'),body,{headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {return Observable.throw(error.json());
        });

    }

}