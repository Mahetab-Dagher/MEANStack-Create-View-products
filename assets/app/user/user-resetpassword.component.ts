import { Component,OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
    selector: 'user-resetpassword',
    templateUrl: './user-resetpassword.component.html'
})
export class ResetpasswordComponent{

    myForm: FormGroup;

    constructor(private userService: UserService, private router: Router){}
    
    onSubmit(){
        this.userService.resetpassword(this.myForm.value.newPassword)
        .subscribe(data => {
            console.log(data)
            localStorage.setItem('token',data.token)
            if(data.isAdmin){
                this.router.navigate(['/auth', 'products', 'new'])
            }
            else{
                this.router.navigate(['/auth', 'products', 'viewp'])
            }
            
        },
        error => console.error(error));
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            
            newPassword: new FormControl(null, Validators.required),
            confirmNewPassword: new FormControl(null, Validators.required)
            
        },
        
        this.passwordMatchValidator
        );
    }
    passwordMatchValidator(form: FormGroup){
        return form.get('newPassword').value === form.get('confirmNewPassword').value
         ? null : {'mismatch' : true};
        //form.value.newPassword === form.value.confirmNewPassword ? null : {'mismatch': true};
    }


}