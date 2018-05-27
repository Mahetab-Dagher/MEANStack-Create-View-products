import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'user-forgetpassword',
    templateUrl:'./user-forgetpassword.component.html'
})
export class ForgetpasswordComponent{

    myForm: FormGroup;
    constructor(private userService: UserService, private router: Router){}

    onSubmit(){
        this.userService.checkifauthinticated(this.myForm.value.secretWord, this.myForm.value.email)
        .subscribe(data => {
            //localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('isAdmin',data.isAdmin);
            this.router.navigate(['/auth','resetPassword'])
            
            
        },
        error => console.error(error));
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            
            secretWord: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ])
        });
    }

}