import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPackageComponent } from './components/product-package/product-package.component';
import { RatePlanComponent } from './components/rate-plan/rate-plan.component';
import { BillingProductComponent } from './components/billing-product/billing-product.component';
import { AddProductPackageComponent } from './components/add-product-package/add-product-package.component';


const routes: Routes = [
{path:'',component:ProductPackageComponent},
{path:'product_package/:id1/rate_plan/:id2',component:RatePlanComponent},
{path:'product_package/:id1/rate_plan/:id2/billing_product/:id3',component:BillingProductComponent},
{path: 'product_package/add',component:AddProductPackageComponent}


//product_package/1/rate_plan/1/product_package/rate_plan/1/billing_product/6


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
