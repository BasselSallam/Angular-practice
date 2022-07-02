import { Injectable } from '@angular/core';
import { IProduct } from '../models/store-info';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdList:IProduct[];


  constructor() {
    this.prdList=[
      {id:1, name:'samsung', quantity:2,price:133,imgURL:'../../../assets/samsung.webp',cateogryID:22},
      {id:2, name:'lenovo', quantity:12,price:500,imgURL:'../../../assets/lenovo.webp',cateogryID:78},
      {id:3, name:'LG', quantity:1,price:58,imgURL:'../../../assets/LG.jpg',cateogryID:9},
      {id:4, name:'Tornado', quantity:0,price:170,imgURL:'../../../assets/tornado.jpg',cateogryID:5},
      {id:4, name:'Tornado', quantity:0,price:170,imgURL:'../../../assets/tornado.jpg',cateogryID:5}

    ]
   }
   getAllProducts():IProduct[]{
    return this.prdList;
   }
   getProductsByCatID(catID:number):IProduct[] {
    if(catID==0){
      return this.getAllProducts();
    }
    else{
      return this.prdList.filter(prd=>prd.id==catID) 
    }
   }
   addNewProduct(prd:IProduct){
    this.prdList.push(prd);
   }
   getProductsID():number[]{
    let prdIDs:number[] = this.prdList.map(prd=>prd.id);
    return prdIDs;
   }
   getProductByID(prdID:number):IProduct|undefined{

    return this.prdList.find(prd=>prd.id==prdID);

  }
}
