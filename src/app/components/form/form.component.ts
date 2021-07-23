import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
product:any;
name:any;
price:any;
code:any;

  constructor(private productService:ProductsService) { }
 
  ngOnInit(): void {
  }




  
  addProduct(){
    console.log('ime je'  +this.name);
    this.product={
      name:this.name,
      price:this.price,
      code:this.code

    }
    this.productService.addProduct(this.product).subscribe(data=>{
   
    
     
    })
  }




}
