import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'user-signin',
    templateUrl: './user-signin.component.html'
})
export class SigninComponent{

    myForm: FormGroup;

    constructor(private userService: UserService, private router: Router){}

    onSubmit(){
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.userService.signin(user)
        .subscribe(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('isAdmin',data.isAdmin);
            if(data.isAdmin){
                this.router.navigate(['/auth', 'products', 'new'])
            }
            else{
                this.router.navigate(['/auth', 'products', 'viewp'])
            }
            
        },
        error => console.error(error));
    this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

}
