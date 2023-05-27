import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup,  FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  // product:IProduct={
  //   name:"",
  //   price:0,
  //   img:"",
  // }
  // constructor(private productService:ProductService){

  // }
  // onHandleAdd(){
  //   this.productService.addProduct(this.product).subscribe(product=>{
  //     console.log(product)
  //   })
  // }
productsForm= this.formBuilder.group({
  name:[''],
  price:[0],
})
constructor(
  private ProductService: ProductService,
  private formBuilder: FormBuilder
){}
onHandleSubmit(){
  if(this.productsForm.valid){
   const product:IProduct={
    name:this.productsForm.value.name || "",
    price: this.productsForm.value.price || 0,
   }
this.ProductService.addProduct(product).subscribe(product=>{
  console.log("thanh cong",product)
})
  }
  console.log(this.productsForm.value)
}

}
