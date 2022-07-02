import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/store-info';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newPrd:IProduct = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    cateogryID: 0
  }

  constructor(private prdService:ProductService) { }

  ngOnInit(): void {
    
  }
  onSubmit(id:string,name:string,quan:string,price:string,img:string,catId:string){
    console.log(id);
    
    this.newPrd!.id=Number(id) ;
    this.newPrd!.name=name ;
    this.newPrd!.quantity=Number(quan) ;
    this.newPrd!.price=Number(price) ;
    this.newPrd!.imgURL=img ;
    this.newPrd!.cateogryID=Number(catId) ;
    console.log(this.newPrd);
    this.prdService.addNewProduct(this.newPrd!)
    
  }
}
