import { Injectable } from '@angular/core';
import { from, Observable, observable, UnsubscriptionError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionADSService {
  adList: string[]
  constructor() {
    this.adList = ['Big Discount', 'Sale Up To 50%', 'Black Friday', 'XMax End Of The Year', ''];
  }
  getSchedualAds(intervalSec: number) :Observable<string> {
    return new Observable<string>((Obs) => {

      let counter = 0;
      let AdsTimer = setInterval(() => {
        
        if (counter == this.adList.length) {
          Obs.complete();
        }
        if(this.adList[counter]==''){
          Obs.error('Empty Ad');
        }
        Obs.next(this.adList[counter]);
        counter++;

      }, intervalSec * 1000);
      return{
        unsubscribe(){
          clearInterval(AdsTimer);
          
        }
      }
    }
    );
  }
  getSerialAds() : Observable<string>{
    return from(this.adList)
  }
}
