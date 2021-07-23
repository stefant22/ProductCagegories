import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private http: HttpClient) { }




  getRate(val:any,val2:any):Observable<any> {
    return this.http.get('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1//product_package/'+val+'/rate_plan/'+val2)
       
      }


      addRate(val:any,val2:any){
        return this.http.post('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1//product_package/'+val+'/rate_plan/'+val2,val)
           
          }

         updateRate(val:any,val2:any){
            return this.http.put('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1//product_package/'+val+'/rate_plan/'+val2,val)
               
              }
}
