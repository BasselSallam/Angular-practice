import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/store-info';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  httpOption: {};
  apiLink: string = 'http://localhost:3000/'
  constructor(private httpClientService: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
       // Authorization: 'my-auth-token'
      })
    };
  }
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClientService.get<IProduct[]>(`${environment.apiURL}/products`)
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClientService.get<IProduct[]>(`${environment.apiURL}/products?categoryID=${catID}`)

  }

  addNewProduct(prd: IProduct) : Observable<IProduct>{
    return this.httpClientService.post<IProduct>
    (`${environment.apiURL}/products`, JSON.stringify(prd),this.httpOption).pipe(
      retry(3),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error('connection error'));
      })
    )
  }

  updateProduct(prdID: number, prdUpdated: IProduct) {

  }

  deleteProduct(prdID: number) {

  }

  getProductsID() {

  }

  getProductByID(prdID: number): Observable<IProduct> {
    return this.httpClientService.get<IProduct>(`${environment.apiURL}/products/${prdID}`)
  }
}
