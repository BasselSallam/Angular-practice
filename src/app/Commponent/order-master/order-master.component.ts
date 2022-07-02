import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { Store } from 'src/app/models/store-data';
import { IProduct } from 'src/app/models/store-info';
import { PromotionADSService } from 'src/app/Services/promotion-ads.service';
import { HomeComponent } from '../products/home.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit,OnDestroy {
  catList:ICategory[];
  selecyedCatID:number=0;
  receivedOrderTotalPrice:number = 0;
  newArr : any = [];
  adsView:string='';
  fatherprdQunatity :number = 0;
  adsSub!:Subscription;
@ViewChild('clientName') ClientName! : ElementRef ;
@ViewChild(HomeComponent) productRef! : HomeComponent;

  constructor(private proAds:PromotionADSService) {
    this.catList=[
      {id:1, name:'samsung'},
      {id:2, name:'lenovo'},
      {id:3, name:'lg'},
      {id:4, name:'Tornado'}
    ]
   }
  ngAfterViewInit(): void {
    this.ClientName.nativeElement.value = 'value added from ts'
  }
 

  ngOnInit(): void {
    let subObj={
      next:(data:string)=>{
        this.adsView=data;
        console.log(data);
        
      },
      error:(err:string)=>{
        console.log(err);
      },
      compelete:()=>{
        console.log('Done');
        
      }
      
    }
    this.adsSub = this.proAds.getSchedualAds(3).subscribe(subObj);
 
  }
  ngOnDestroy(): void {
    this.adsSub.unsubscribe();
  }
  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice = totalPrice ;
  }
  getNewArrOfProduct(){
    this.newArr = this.productRef.prdListarr;
    console.log(this.newArr);
    this.fatherprdQunatity = this.productRef.prdQuantity
  }
}
