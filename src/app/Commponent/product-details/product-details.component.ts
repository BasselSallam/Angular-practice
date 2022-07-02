import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/store-info';
import { ApiProductsService } from 'src/app/Services/api-products.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentPrdID : number = 0;
  product : IProduct | undefined;
  prdArrOfID : number[]=[];
  constructor(private activeRoute:ActivatedRoute,private PrdService:ProductService,private loc:Location,private route:Router,private apiService:ApiProductsService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap)=>{
    this.currentPrdID = Number(paramMap.get('pid')) 
    // this.product= this.PrdService.getProductByID(this.currentPrdID)
    this.apiService.getProductByID(this.currentPrdID).subscribe(prd=>{this.product=prd})
    
    ;})
  
    console.log(this.product);
    this.prdArrOfID=this.PrdService.getProductsID();

    
  }
  back(){
    this.loc.back()
  }
  getPrvPrd(){
    let currIndex = this.prdArrOfID.findIndex((element)=>element==this.currentPrdID);
    if(currIndex>0){
      let prevPrdID = this.prdArrOfID[currIndex-1];
      this.route.navigate(['/products',prevPrdID])
    }
    
    
  }
  getNextPrd(){
    let currIndex = this.prdArrOfID.findIndex((element)=>element==this.currentPrdID);
    if(currIndex<this.prdArrOfID.length){
      let nextPrdID = this.prdArrOfID[currIndex+1];
      this.route.navigate(['/products',nextPrdID])
    }
  }

}
