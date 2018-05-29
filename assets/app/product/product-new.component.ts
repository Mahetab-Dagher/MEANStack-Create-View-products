import { Component , OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { FileUploader, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';


const URL = 'http://localhost:3000/product/new';

@Component({
    selector: 'product-new',
    templateUrl: './product-new.component.html'
})
export class NewProductComponent{
    
    uploader:FileUploader = new FileUploader({url: URL});
    myForm : FormGroup;
    
    
    constructor(private productService: ProductService){}

    onSubmit(){
        
        
        this.uploader.onBuildItemForm = (item, form) => {
            form.append('description', this.myForm.value.description);
            form.append('price', this.myForm.value.price);
            form.append('newPrice', this.myForm.value.newPrice);
            form.append('quantity', this.myForm.value.quatity);


        };
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = (item, response, status, headers) => 
              this.onSuccessItem(item, response, status, headers);

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


    }

    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
         let data = JSON.parse(response); 
        console.log(data);
        
        
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            image: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            price: new FormControl(null,[ Validators.required, Validators.pattern("[0-9]*")]),
            newPrice: new FormControl(null,[ Validators.required, Validators.pattern("[0-9]*")]),
            quatity: new FormControl(null,[ Validators.required, Validators.pattern("[0-9]*")])
        });
    }

}