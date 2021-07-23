import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-add-product-package',
  templateUrl: './add-product-package.component.html',
  styleUrls: ['./add-product-package.component.css']
})
export class AddProductPackageComponent implements OnInit {
  
  constructor( productService:ProductsService, formcomponent:FormComponent) { }


data:[]=[];
  ngOnInit(): void {

   
  }


}
