import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    template:  `
    <header class="row spacing">
        <nav class="col-md-8 col-md-offset-2">
           <!-- <ul class="nav nav-tabs">
                <li routerLinkActive="active" ><a [routerLink]="['new']">New Product</a></li>
                <li routerLinkActive="active" ><a [routerLink]="['viewp']">View Products</a></li>
                
            </ul> -->
        </nav>
    </header>
    <br>
    <div class="row spacing">
       <router-outlet></router-outlet>
    </div>
`
})
export class ProductComponent{

}