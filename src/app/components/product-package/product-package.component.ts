import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-package',
  templateUrl: './product-package.component.html',
  styleUrls: ['./product-package.component.css']
})
export class ProductPackageComponent implements OnInit {
  products:any=[];
 


  constructor( private productService:ProductsService) { }
  
  
  addEditProd:boolean=false;
  prod:any;
  ngOnInit(): void {
    this.refreshProducts();
  }
refreshProducts(){

  this.productService.getProducts().subscribe(data=>{
    this.products=data
    console.log(this.products);
  })
}



deleteProduct(val:any){

  console.log(val.id);
  if(confirm("Delete this product?")){
 this.productService.deleteProduct(val.id).subscribe(data=>{

 })
}

this.refreshProducts();
}


}
