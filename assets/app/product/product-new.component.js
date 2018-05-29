import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "./product.service";
import { FileUploader } from 'ng2-file-upload';
var URL = 'http://localhost:3000/product/new';
var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(productService) {
        this.productService = productService;
        this.uploader = new FileUploader({ url: URL });
    }
    NewProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('description', _this.myForm.value.description);
            form.append('price', _this.myForm.value.price);
            form.append('newPrice', _this.myForm.value.newPrice);
            form.append('quantity', _this.myForm.value.quatity);
        };
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            return _this.onSuccessItem(item, response, status, headers);
        };
        // this.uploader.onErrorItem = (item, response, status, headers) => console.log('err')
        /* this.uploader.onSuccessItem = (item, response, status, headers) =>
                                        this.onSuccessItem(item, response, status, headers);*/
        //this.data = JSON.parse(response);
        //console.log('!!!! ',this.data);
        //console.log('$$ ',localStorage.getItem('filename'))
        /* const product = new Product(
                    {filename: localStorage.getItem('filename'), originalname: localStorage.getItem('originalname')},
                    this.myForm.value.description,
                    this.myForm.value.price,
                    this.myForm.value.newPrice,
                    this.myForm.value.quatity);
            
                    //console.log(this.myForm.value.image.filename);
            
                    this.productService.addProduct(product)
                    .subscribe(data => console.log(data),
                    error => console.error(error)); */
        this.myForm.reset();
    };
    NewProductComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var data = JSON.parse(response);
        console.log(data);
    };
    NewProductComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            image: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            price: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*")]),
            newPrice: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*")]),
            quatity: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*")])
        });
    };
    NewProductComponent.decorators = [
        { type: Component, args: [{
                    selector: 'product-new',
                    templateUrl: './product-new.component.html'
                },] },
    ];
    /** @nocollapse */
    NewProductComponent.ctorParameters = function () { return [
        { type: ProductService, },
    ]; };
    return NewProductComponent;
}());
export { NewProductComponent };
