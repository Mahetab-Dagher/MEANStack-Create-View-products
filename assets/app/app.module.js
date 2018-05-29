import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { UserComponent } from './user/user.component';
import { routing } from './app.routing';
import { UserService } from './user/user.service';
import { HttpModule } from '@angular/http';
//import { ProductComponent } from './product/product.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AppComponent, UserComponent],
                    imports: [BrowserModule, routing, HttpModule],
                    bootstrap: [AppComponent],
                    providers: [UserService]
                },] },
    ];
    return AppModule;
}());
export { AppModule };
