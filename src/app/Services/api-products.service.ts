import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError, observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/store-info';
import { ICategory } from './../models/icategory';
import { GenericApiHandlerService } from './generic-api-handler.service';
import { APIResponseVM } from './../models/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  apiLink: string = 'http://localhost:3000/'
  constructor(private httpClientService: HttpClient,private genericAPI:GenericApiHandlerService) {

  }

  getCategories(): Observable<ICategory[]> {
    return this.httpClientService.get<ICategory[]>(`${environment.apiURL}/categories`)
  }
  getAllProducts(): Observable<IProduct[]> {
// return this.GenericApiHandlerService.getAll('/home').pipe(
//   map((APIResponseVM: APIResponseVM) => APIResponseVM.data)
// )
    return this.httpClientService.get<IProduct[]>(`${environment.apiURL}/products`)
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClientService.get<IProduct[]>(`${environment.apiURL}/products?categoryID=${catID}`)

  }

  addNewProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClientService.post<IProduct>
      (`${environment.apiURL}/products`, JSON.stringify(prd), this.genericAPI.httpOption).pipe(
        retry(3),
        catchError(this.genericAPI.handleError)
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
