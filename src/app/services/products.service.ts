import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class ProductsService {


  constructor( private http: HttpClient) {  }

  

   getProducts():Observable<any> {
    return this.http.get<any>('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1/product_package')
       
      }


      addProduct(data:any) {
        return this.http.post('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1/product_package',data)
           
          }

          editProduct(val:any,data:any) {
            return this.http.put('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1/product_package/'+val,data)
               
              }

              deleteProduct(val:any) {
                return this.http.delete('https://60f1731038ecdf0017b0fc6b.mockapi.io/api/v1/product_package/'+val)
                   
                  }
  
  }





 
 