import { Component, OnInit } from '@angular/core';
import { BillingProductService } from 'src/app/services/billing-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing-product',
  templateUrl: './billing-product.component.html',
  styleUrls: ['./billing-product.component.css']
})
export class BillingProductComponent implements OnInit {

  constructor(private billingProduct:BillingProductService, private router:ActivatedRoute) { }
  billProducts:any;
prodId:any;
rateId:any;
bpId:any;
  ngOnInit(): void {
   this. refreshBp();
  }

  getRouteIds(){
    return this.router.paramMap.subscribe( params => {
      this.prodId = params.get('id1');
      this.rateId = params.get('id2');
      this.bpId = params.get('id3');
      console.log('prod_id',this.prodId,'rate_id',this.rateId,'bp_id',this.bpId)
    })
  }


  refreshBp(){
    this.getRouteIds();
    console.log('rate Id je'+this.rateId,'prodId je :'+this.prodId);

    this.billingProduct.getBillingProduct(this.prodId,this.rateId,this.bpId).subscribe(data=>{
      this.billProducts=data
      console.log(this.billProducts);
    })
  }




}
