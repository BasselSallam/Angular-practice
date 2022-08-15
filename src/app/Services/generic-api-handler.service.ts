import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, retry, catchError, observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from './../models/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {
  httpOption;
  constructor(private httpClient:HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
   }
private setHeader(key:string , value:string){
  this.httpOption.headers.set(key , value)
}

   handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

getAll(APIRoute:string) :Observable<APIResponseVM>{
  return this.httpClient.get<APIResponseVM>(`${environment}/${APIRoute}`).pipe(
    retry(3),
    catchError(this.handleError)
  )
}
// search(itemsList:string[]):Observable<APIResponseVM>{

// }

// getByID(id:number):Observable<APIResponseVM>{

// }

// post(obj:any):Observable<APIResponseVM>{

// }
// put(id:number , obj:any):Observable<APIResponseVM>{

// }
// delete(id:number):Observable<APIResponseVM>{

// }







}
