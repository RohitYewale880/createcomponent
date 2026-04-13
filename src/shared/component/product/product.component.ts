import { Component } from "@angular/core";


@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent{
    product = 'this is the product component'
}