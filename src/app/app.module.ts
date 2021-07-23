import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPackageComponent } from './components/product-package/product-package.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatePlanComponent } from './components/rate-plan/rate-plan.component';
import { BillingProductComponent } from './components/billing-product/billing-product.component';
import { AddProductPackageComponent } from './components/add-product-package/add-product-package.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductPackageComponent,
    RatePlanComponent,
    BillingProductComponent,
    AddProductPackageComponent,
    FormComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
