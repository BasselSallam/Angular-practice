import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSub:BehaviorSubject<boolean>
  constructor() {
    this.isLoggedSub = new BehaviorSubject<boolean> (this.userStatus);
   }

  
  login (userName:string , password : string){
    let aToken = '5551515';
    localStorage.setItem('token',aToken)
    this.isLoggedSub.next(true)


  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedSub.next(false)



  }


  get userStatus():boolean{
    return (localStorage.getItem('token'))? true : false;
      
    


  }

  isUserLoggedSub(): Observable<boolean>{
    
    return this.isLoggedSub.asObservable();
  }


}
