import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rate-plan',
  templateUrl: './rate-plan.component.html',
  styleUrls: ['./rate-plan.component.css']
})
export class RatePlanComponent implements OnInit {
  rates:any;
  constructor(private rateService:RatesService, private router:ActivatedRoute) { }
prodId:any;
rateId:any;
  ngOnInit(): void {
    
    this.refreshRate();
  }

  getRouteIds(){
    return this.router.paramMap.subscribe( params => {
      this.prodId = params.get('id1');
      this.rateId = params.get('id2');
    })
  }
  refreshRate(){
    this.getRouteIds();
    console.log('rate Id je'+this.rateId,'prodId je :'+this.prodId);

    this.rateService.getRate(this.prodId,this.rateId).subscribe(data=>{
      this.rates=data
      console.log(this.rates);
    })
  }

}
