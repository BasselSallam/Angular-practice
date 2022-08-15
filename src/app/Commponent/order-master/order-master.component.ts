import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { Store } from 'src/app/models/store-data';
import { IProduct } from 'src/app/models/store-info';
import { PromotionADSService } from 'src/app/Services/promotion-ads.service';
import { HomeComponent } from '../products/home.component';
import { ApiProductsService } from './../../Services/api-products.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FirestoreService } from 'src/app/Services/firestore.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit,OnDestroy {
  catList:ICategory[]=[];
  selecyedCatID:number=0;
  receivedOrderTotalPrice:number = 0;
  newArr : any = [];
  item :any [] = []
  adsView:string='';
  fatherprdQunatity :number = 0;
  adsSub!:Subscription;
@ViewChild('clientName') ClientName! : ElementRef ;
@ViewChild(HomeComponent) productRef! : HomeComponent;

  constructor(private proAds:PromotionADSService,private httpService:ApiProductsService,private firestoreService:FirestoreService) {
    this.httpService.getCategories().subscribe(prd => {this.catList=prd})
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
    this.firestoreService.getItems().subscribe(items =>{this.item = items
    console.log(items);
    
    })
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
