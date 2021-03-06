import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm} from "@angular/forms";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'user-signup',
    templateUrl: './user-signup.component.html'
})
export class SignupComponent{
    myForm: FormGroup;
    user: User;

    constructor(private userService: UserService, private router: Router){}
    onSubmit(){
        const user = new User(this.myForm.value.email, 
            this.myForm.value.password, 
            this.myForm.value.userName,
            this.myForm.value.secretWord);
        //console.log('@', user);    
        this.userService.signup(user)
        .subscribe(data => { console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('isAdmin',data.isAdmin);
            if(data.isAdmin){
                this.router.navigate(['/auth', 'products', 'new'])
            }
            else{
                this.router.navigate(['/auth', 'products', 'viewp'])
            }},
                   error => console.error(error));
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
            secretWord: new FormControl(null, Validators.required)
        });
    }
}