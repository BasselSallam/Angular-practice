import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { ICategory } from 'src/app/models/icategory';
import { Store } from 'src/app/models/store-data';
import { IProduct } from 'src/app/models/store-info';
import { ApiProductsService } from 'src/app/Services/api-products.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  todayDate: Date = new Date();
  showImg: boolean = true;
  userFeedback: string = "Select from dropdown-list"
  StoreClass: Store;
  prdListarr: IProduct[] = [];
  decrease: number = 0;
  @Input() recievedCatID: number = 0;
  orderTotalPrice: number = 0;
  prdQuantity: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;

  constructor(
    // private prdService: ProductService
     private router: Router
    , private apiService: ApiProductsService) {
    this.totalPriceChanged = new EventEmitter<number>()
    this.StoreClass = new Store('Lovely', ["cairo", "mansoura", "alex"], 'http://fakeimg.pl/250x100/ff0000/', 'Bassel', ['yellow', 'green'])

  }
  ngOnChanges(): void {
    console.log(this.recievedCatID);
    
    this.apiService.getProductsByCatID(this.recievedCatID).subscribe(prd=>{this.prdListarr= prd})
    // this.prdListarr = this.prdService.getProductsByCatID(this.recievedCatID)

  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
  trackByFunc(index: number, item: IProduct) {
    return item.id
  }
  ngOnInit(): void {
    // this.prdListarr = this.prdService.getAllProducts();
    this.apiService.getAllProducts().subscribe(prd=>{this.prdListarr=prd})
  }
  Discount = DiscountOffers;
  change(e: number, id: number) {
    if (id == 1) {
      if (!(e == 0)) {
        this.decrease--;
      }
    }
    if (id == 2) {
      if (!(e == 0)) {
        this.decrease--;
      }
    }


  }
  updateTotalPrice(prdPrice: number, itemsCount: any) {
    this.prdQuantity = itemsCount;
    this.orderTotalPrice += prdPrice * parseInt(itemsCount);
    this.totalPriceChanged.emit(this.orderTotalPrice)
  }
  openPrdDetails(prid: number) {
    this.router.navigate(['/products', prid])
  }

}
